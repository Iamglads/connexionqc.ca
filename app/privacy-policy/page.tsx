import type { Metadata } from 'next';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description: 'Notre politique de confidentialité et nos pratiques de protection des données',
  openGraph: {
    title: 'Politique de confidentialité',
    description: 'Notre politique de confidentialité et nos pratiques de protection des données',
    url: `${siteConfig.url}/privacy-policy`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Politique de confidentialité',
    description: 'Notre politique de confidentialité et nos pratiques de protection des données',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-dark-900 pt-24">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-8">Politique de confidentialité</h1>
        
        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Commentaires</h2>
            <div className="bg-dark-800 rounded-lg p-6 space-y-4">
              <p className="text-gray-300">
                Lorsque les visiteurs laissent des commentaires sur le site, nous collectons les données affichées dans le formulaire de commentaires, ainsi que l&apos;adresse IP du visiteur et la chaîne de l&apos;agent utilisateur du navigateur pour faciliter la détection du spam.
              </p>
              <p className="text-gray-300">
                Une chaîne anonymisée créée à partir de votre adresse e-mail (également appelée hachage) peut être fournie au service Gravatar pour voir si vous l&apos;utilisez. La politique de confidentialité du service Gravatar est disponible ici : https://automattic.com/privacy/. Après approbation de votre commentaire, votre photo de profil est visible publiquement dans le cadre de votre commentaire.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Médias</h2>
            <div className="bg-dark-800 rounded-lg p-6">
              <p className="text-gray-300">
                Si vous téléchargez des images sur le site Web, vous devez éviter de télécharger des images contenant des données de localisation intégrées (GPS EXIF). Les visiteurs du site Web peuvent télécharger et extraire toutes les données de localisation des images du site Web.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Cookies</h2>
            <div className="bg-dark-800 rounded-lg p-6 space-y-4">
              <p className="text-gray-300">
                Si vous laissez un commentaire sur notre site, vous pouvez choisir d&apos;enregistrer votre nom, votre adresse e-mail et votre site Web dans des cookies. Ces informations sont destinées à votre commodité afin que vous n&apos;ayez pas à remplir à nouveau vos coordonnées lorsque vous laissez un autre commentaire. Ces cookies dureront un an.
              </p>
              <p className="text-gray-300">
                Si vous visitez notre page de connexion, nous définirons un cookie temporaire pour déterminer si votre navigateur accepte les cookies. Ce cookie ne contient aucune donnée personnelle et est supprimé lorsque vous fermez votre navigateur.
              </p>
              <p className="text-gray-300">
                Lors de votre connexion, nous mettrons également en place plusieurs cookies pour enregistrer vos informations de connexion et vos choix d&apos;affichage à l&apos;écran. Les cookies de connexion durent deux jours et les cookies d&apos;options d&apos;écran durent un an. Si vous sélectionnez « Se souvenir de moi », votre connexion persistera pendant deux semaines. Si vous vous déconnectez de votre compte, les cookies de connexion seront supprimés.
              </p>
              <p className="text-gray-300">
                Si vous modifiez ou publiez un article, un cookie supplémentaire sera enregistré dans votre navigateur. Ce cookie ne contient aucune donnée personnelle et indique simplement l&apos;identifiant de la publication de l&apos;article que vous venez de modifier. Il expire après 1 jour.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Contenu intégré provenant d&apos;autres sites Web</h2>
            <div className="bg-dark-800 rounded-lg p-6 space-y-4">
              <p className="text-gray-300">
                Les articles de ce site peuvent inclure du contenu intégré (par exemple des vidéos, des images, des articles, etc.). Le contenu intégré d&apos;autres sites Web se comporte exactement de la même manière que si le visiteur avait visité l&apos;autre site Web.
              </p>
              <p className="text-gray-300">
                Ces sites Web peuvent collecter des données sur vous, utiliser des cookies, intégrer un suivi tiers supplémentaire et surveiller votre interaction avec ce contenu intégré, y compris le suivi de votre interaction avec le contenu intégré si vous disposez d&apos;un compte et êtes connecté à ce site Web.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Avec qui partageons-nous vos données</h2>
            <div className="bg-dark-800 rounded-lg p-6">
              <p className="text-gray-300">
                Si vous demandez une réinitialisation de mot de passe, votre adresse IP sera incluse dans l&apos;e-mail de réinitialisation.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Combien de temps conservons-nous vos données</h2>
            <div className="bg-dark-800 rounded-lg p-6 space-y-4">
              <p className="text-gray-300">
                Si vous laissez un commentaire, le commentaire et ses métadonnées sont conservés indéfiniment. Cela nous permet de reconnaître et d&apos;approuver automatiquement tous les commentaires suivants au lieu de les conserver dans une file d&apos;attente de modération.
              </p>
              <p className="text-gray-300">
                Pour les utilisateurs qui s&apos;inscrivent sur notre site Web (le cas échéant), nous stockons également les informations personnelles qu&apos;ils fournissent dans leur profil d&apos;utilisateur. Tous les utilisateurs peuvent voir, modifier ou supprimer leurs informations personnelles à tout moment (sauf qu&apos;ils ne peuvent pas modifier leur nom d&apos;utilisateur). Les administrateurs de sites Web peuvent également voir et modifier ces informations.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Quels sont vos droits sur vos données</h2>
            <div className="bg-dark-800 rounded-lg p-6">
              <p className="text-gray-300">
                Si vous avez un compte sur ce site ou si vous avez laissé des commentaires, vous pouvez demander à recevoir un fichier exporté des données personnelles que nous détenons à votre sujet, y compris toutes les données que vous nous avez fournies. Vous pouvez également demander que nous supprimions toutes les données personnelles que nous détenons à votre sujet. Cela n&apos;inclut pas les données que nous sommes obligés de conserver à des fins administratives, juridiques ou de sécurité.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Où vos données sont envoyées</h2>
            <div className="bg-dark-800 rounded-lg p-6">
              <p className="text-gray-300">
                Les commentaires des visiteurs peuvent être vérifiés via un service automatisé de détection de spam.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}