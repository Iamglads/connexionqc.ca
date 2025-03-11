import { NextResponse } from 'next/server';
import { sendQuoteEmail } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate input
    if (!body.name || !body.email || !body.company) {
      return NextResponse.json(
        { success: false, message: 'Informations manquantes' },
        { status: 400 }
      );
    }

    // Send emails
    const emailResult = await sendQuoteEmail(body);

    if (!emailResult.success) {
      return NextResponse.json(
        { success: false, message: 'Erreur lors de l\'envoi des emails' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Demande envoyée avec succès' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Quote submission error:', error);
    return NextResponse.json(
      { success: false, message: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}