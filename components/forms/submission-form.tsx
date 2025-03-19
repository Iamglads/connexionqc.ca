"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2 } from 'lucide-react';

const eventTypes = [
  "Conférence",
  "Réunion",
  "Gala",
  "Atelier de formation",
  "Salon d'exposition",
  "Présentation hybride",
  "Présentation sur grand écran",
  "Journée porte ouverte",
  "Cinéma extérieur",
  "Cinéma intérieur",
  "Vidéo mapping",
  "Ambiance sonore",
  "Sonorisation ambiophonique DTS 5.1/7.1",
  "Tournage cinéma",
  "Mariage",
  "Location de matériel audiovisuel"
];

const formSchema = z.object({
  name: z.string().min(2, { message: 'Le nom complet est requis' }),
  company: z.string().min(2, { message: 'Le nom de la société est requis' }),
  email: z.string().email({ message: 'Veuillez entrer une adresse email valide' }),
  phone: z.string().min(10, { message: 'Veuillez entrer un numéro de téléphone valide' }),
  eventType: z.string().min(2, { message: 'Le type d\'événement est requis' }),
  attendees: z.string().min(1, { message: 'Le nombre de participants est requis' }),
  startDate: z.string().min(1, { message: 'La date de début est requise' }),
  endDate: z.string().min(1, { message: 'La date de fin est requise' }),
  timeRange: z.string().optional(),
  location: z.string().min(5, { message: 'L\'adresse de livraison est requise' }),
  equipment: z.string().min(10, { message: 'Veuillez décrire le matériel souhaité' }),
  technician: z.enum(['yes', 'no'], {
    required_error: "Veuillez choisir si vous souhaitez un technicien",
  }),
  delivery: z.enum(['delivery', 'pickup'], {
    required_error: "Veuillez choisir une option de livraison",
  }),
  referral: z.enum(['google', 'recommendation', 'event'], {
    required_error: "Veuillez indiquer comment vous nous avez connu",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export function SubmissionForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: '',
  });

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      company: '',
      email: '',
      phone: '',
      eventType: '',
      attendees: '',
      startDate: '',
      endDate: '',
      timeRange: '',
      location: '',
      equipment: '',
      technician: 'no',
      delivery: 'delivery',
      referral: 'google',
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      setIsSubmitting(true);
      setFormStatus({ type: null, message: '' });

      const response = await fetch('/api/submit-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Une erreur est survenue');
      }

      form.reset();
      setFormStatus({
        type: 'success',
        message: 'Votre demande a été envoyée avec succès ! Nous vous contacterons dans les plus brefs délais.',
      });
    } catch (error) {
      console.error('Erreur lors de l\'envoi du formulaire:', error);
      setFormStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Une erreur est survenue lors de l\'envoi du formulaire',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {formStatus.type && (
          <Alert
            className={`mb-6 ${
              formStatus.type === 'success' 
                ? 'bg-green-50 text-green-800 dark:bg-green-950 dark:text-green-300' 
                : 'bg-red-50 text-red-800 dark:bg-red-950 dark:text-red-300'
            }`}
          >
            <AlertDescription>{formStatus.message}</AlertDescription>
          </Alert>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nom et prénom</FormLabel>
                <FormControl>
                  <Input placeholder="Votre nom complet" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nom de votre Société</FormLabel>
                <FormControl>
                  <Input placeholder="Nom de l'entreprise" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Courriel</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="votre.email@exemple.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Téléphone</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="(514) 555-0123" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="eventType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Quel genre d'événement</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Sélectionnez le type d'événement" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {eventTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="attendees"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre de personnes présentes</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="100" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="startDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date de début du projet</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="endDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date de fin du projet</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="timeRange"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Horaire approximatif (facultatif)</FormLabel>
              <FormControl>
                <Input placeholder="Ex: 9h00 à 17h00" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Adresse où le matériel sera utilisé</FormLabel>
              <FormControl>
                <Input placeholder="Adresse complète" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="equipment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Quel matériel désirez-vous louer</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Décrivez le matériel dont vous avez besoin"
                  className="min-h-[100px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="technician"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Désirez-vous la présence d'un technicien sur place</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="yes" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Oui, Je désire un technicien sur place pour assistance et opération durant l'événement
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="no" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Nous n'avons pas besoin de technicien sur place durant l'événement
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="delivery"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Livraison du matériel</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="delivery" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Nous aimerions avoir la livraison (installation) et la cueillette (démontage) du matériel à notre adresse
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="pickup" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Aucune livraison, nous allons ramasser et retourner le matériel nous-mêmes à votre local
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="referral"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Comment avez-vous connu notre entreprise</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="google" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Recherche sur le web avec Google
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="recommendation" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Vous avez été recommandés par une personne
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="event" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Nous avons assisté à un événement où vous étiez présent
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Envoi en cours...
            </>
          ) : (
            "Envoyer la demande"
          )}
        </Button>
      </form>
    </Form>
  );
}