import sgMail from '@sendgrid/mail';
import { siteConfig } from './config';
import { quoteRequestTemplate, quoteConfirmationTemplate } from './email-templates';

// Configure SendGrid avec la clé API
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

export async function sendQuoteEmail(data: any) {
  try {
    // Email de notification à l'administrateur
    const adminMsg = {
      to: siteConfig.contact.email,
      from: {
        email: siteConfig.emailConfig.auth.user,
        name: siteConfig.name
      },
      subject: `Nouvelle demande de soumission - ${data.eventType}`,
      html: quoteRequestTemplate(data),
    };

    // Email de confirmation au client
    const clientMsg = {
      to: data.email,
      from: {
        email: siteConfig.emailConfig.auth.user,
        name: siteConfig.name
      },
      subject: `Confirmation de votre demande de soumission - ${siteConfig.name}`,
      html: quoteConfirmationTemplate(data),
    };

    // Envoi des deux emails
    await Promise.all([
      sgMail.send(adminMsg),
      sgMail.send(clientMsg)
    ]);

    return { success: true };
  } catch (error) {
    console.error('Error sending quote emails:', error);
    return { success: false, error };
  }
}

// Vérifier la configuration de SendGrid
export async function verifyEmailConfig() {
  try {
    // Vérifie si la clé API est définie
    if (!process.env.SENDGRID_API_KEY) {
      throw new Error('SendGrid API key is not configured');
    }
    return { success: true };
  } catch (error) {
    console.error('SendGrid configuration error:', error);
    return { success: false, error };
  }
}