import { siteConfig } from './config';
import { formatDate } from './utils';

interface QuoteEmailData {
  name: string;
  company: string;
  email: string;
  phone: string;
  eventType: string;
  attendees: string;
  startDate: string;
  endDate: string;
  timeRange?: string;
  location: string;
  equipment: string;
  technician: 'yes' | 'no';
  delivery: 'delivery' | 'pickup';
  referral: 'google' | 'recommendation' | 'event';
}

export const quoteRequestTemplate = (data: QuoteEmailData) => {
  return `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Nouvelle demande de soumission</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          background-color: #000;
          color: white;
          padding: 20px;
          text-align: center;
          margin-bottom: 30px;
        }
        .section {
          margin-bottom: 20px;
          padding: 20px;
          background-color: #f9f9f9;
          border-radius: 5px;
        }
        .label {
          font-weight: bold;
          color: #666;
        }
        .value {
          margin-top: 5px;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>Nouvelle demande de soumission</h1>
      </div>

      <div class="section">
        <h2>Informations du client</h2>
        <p><span class="label">Nom:</span> <span class="value">${data.name}</span></p>
        <p><span class="label">Société:</span> <span class="value">${data.company}</span></p>
        <p><span class="label">Email:</span> <span class="value">${data.email}</span></p>
        <p><span class="label">Téléphone:</span> <span class="value">${data.phone}</span></p>
      </div>

      <div class="section">
        <h2>Détails de l'événement</h2>
        <p><span class="label">Type d'événement:</span> <span class="value">${data.eventType}</span></p>
        <p><span class="label">Nombre de participants:</span> <span class="value">${data.attendees}</span></p>
        <p><span class="label">Date de début:</span> <span class="value">${formatDate(data.startDate)}</span></p>
        <p><span class="label">Date de fin:</span> <span class="value">${formatDate(data.endDate)}</span></p>
        ${data.timeRange ? `<p><span class="label">Horaire:</span> <span class="value">${data.timeRange}</span></p>` : ''}
        <p><span class="label">Lieu:</span> <span class="value">${data.location}</span></p>
      </div>

      <div class="section">
        <h2>Besoins techniques</h2>
        <p><span class="label">Équipement demandé:</span></p>
        <p class="value">${data.equipment}</p>
        <p><span class="label">Technicien requis:</span> <span class="value">${data.technician === 'yes' ? 'Oui' : 'Non'}</span></p>
        <p><span class="label">Livraison:</span> <span class="value">${data.delivery === 'delivery' ? 'Livraison et installation demandées' : 'Collecte par le client'}</span></p>
      </div>

      <div class="section">
        <h2>Source</h2>
        <p><span class="label">Comment ils nous ont trouvé:</span> <span class="value">
          ${data.referral === 'google' ? 'Recherche Google' : 
            data.referral === 'recommendation' ? 'Recommandation' : 
            'Événement précédent'}
        </span></p>
      </div>
    </body>
    </html>
  `;
};

export const quoteConfirmationTemplate = (data: QuoteEmailData) => {
  return `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Confirmation de votre demande de soumission</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          background-color: #000;
          color: white;
          padding: 20px;
          text-align: center;
          margin-bottom: 30px;
        }
        .content {
          background-color: #f9f9f9;
          padding: 20px;
          border-radius: 5px;
        }
        .footer {
          margin-top: 30px;
          text-align: center;
          font-size: 14px;
          color: #666;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>${siteConfig.name}</h1>
      </div>

      <div class="content">
        <h2>Merci pour votre demande de soumission</h2>
        
        <p>Cher(e) ${data.name},</p>
        
        <p>Nous avons bien reçu votre demande de soumission pour votre événement prévu le ${formatDate(data.startDate)}.</p>
        
        <p>Notre équipe va étudier votre demande et vous contactera dans les plus brefs délais avec une proposition détaillée.</p>
        
        <p>Pour référence, voici un récapitulatif de votre demande :</p>
        <ul>
          <li>Type d'événement : ${data.eventType}</li>
          <li>Date : Du ${formatDate(data.startDate)} au ${formatDate(data.endDate)}</li>
          <li>Lieu : ${data.location}</li>
        </ul>
        
        <p>Si vous avez des questions ou des informations supplémentaires à nous communiquer, n'hésitez pas à nous contacter :</p>
        <ul>
          <li>Téléphone : ${siteConfig.contact.phone}</li>
          <li>Email : ${siteConfig.contact.email}</li>
        </ul>
      </div>

      <div class="footer">
        <p>${siteConfig.name}</p>
        <p>${siteConfig.contact.address}</p>
        <p>${siteConfig.contact.phone} | ${siteConfig.contact.email}</p>
      </div>
    </body>
    </html>
  `;
};