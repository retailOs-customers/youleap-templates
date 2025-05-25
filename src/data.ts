export async function getOrder(number: string) {
  return (await getOrders()).find((order) => order.number.toString() === number)!
}

export async function getOrders() {
  return [
    {
      number: '4376',
      status: 'Delivered on January 08, 2028',
      invoiceHref: '#',
      products: [
        {
          id: 1,
          name: 'Nomad Tumbler',
          handle: 'nomad-tumbler',
          description:
            'This durable and portable insulated tumbler will keep your beverage at the perfect temperature during your next adventure.',
          href: '#',
          price: '35.00',
          status: 'Preparing to ship',
          step: 1,
          date: 'March 24, 2021',
          datetime: '2021-03-24',
          address: ['Floyd Miles', '7363 Cynthia Pass', 'Toronto, ON N3Y 4H8'],
          email: 'f•••@example.com',
          phone: '1•••••••••40',
          imageSrc: '/images/shoe/shoe-coral-1.webp',
          imageAlt: 'Insulated bottle with white base and black snap lid.',
          quantity: 1,
          size: 'M',
          color: 'Black',
        },
      ],
    },
    {
      number: '4657',
      status: 'Delivered on January 11, 2025',
      invoiceHref: '#',
      products: [
        {
          id: 1,
          name: 'Nomad Tumbler',
          handle: 'nomad-tumbler',
          description:
            'This durable and portable insulated tumbler will keep your beverage at the perfect temperature during your next adventure.',
          href: '#',
          price: '35.00',
          status: 'Preparing to ship',
          step: 1,
          date: 'March 24, 2021',
          datetime: '2021-03-24',
          address: ['Floyd Miles', '7363 Cynthia Pass', 'Toronto, ON N3Y 4H8'],
          email: 'f•••@example.com',
          phone: '1•••••••••40',
          imageSrc: '/images/shoe/shoe-coral-1.webp',
          imageAlt: 'Insulated bottle with white base and black snap lid.',
          quantity: 1,
          size: 'XS',
          color: 'Black Brown',
        },
        {
          id: 2,
          name: 'Minimalist Wristwatch',
          handle: 'minimalist-wristwatch',
          description: 'This contemporary wristwatch has a clean, minimalist look and high quality components.',
          href: '#',
          price: '149.00',
          status: 'Shipped',
          step: 0,
          date: 'March 23, 2021',
          datetime: '2021-03-23',
          address: ['Floyd Miles', '7363 Cynthia Pass', 'Toronto, ON N3Y 4H8'],
          email: 'f•••@example.com',
          phone: '1•••••••••40',
          imageSrc: '/images/shoe/shoe-coral-2.webp',
          imageAlt:
            'Arm modeling wristwatch with black leather band, white watch face, thin watch hands, and fine time markings.',
          quantity: 1,
          size: 'XL',
          color: 'White',
        },
      ],
    },
  ]
}

export function getCountries() {
  return [
    {
      name: 'Canada',
      code: 'CA',
      flagUrl: '/flags/ca.svg',
      regions: [
        'Alberta',
        'British Columbia',
        'Manitoba',
        'New Brunswick',
        'Newfoundland and Labrador',
        'Northwest Territories',
        'Nova Scotia',
        'Nunavut',
        'Ontario',
        'Prince Edward Island',
        'Quebec',
        'Saskatchewan',
        'Yukon',
      ],
    },
    {
      name: 'Mexico',
      code: 'MX',
      flagUrl: '/flags/mx.svg',
      regions: [
        'Aguascalientes',
        'Baja California',
        'Baja California Sur',
        'Campeche',
        'Chiapas',
        'Chihuahua',
        'Ciudad de Mexico',
        'Coahuila',
        'Colima',
        'Durango',
        'Guanajuato',
        'Guerrero',
        'Hidalgo',
        'Jalisco',
        'Mexico State',
        'Michoacán',
        'Morelos',
        'Nayarit',
        'Nuevo León',
        'Oaxaca',
        'Puebla',
        'Querétaro',
        'Quintana Roo',
        'San Luis Potosí',
        'Sinaloa',
        'Sonora',
        'Tabasco',
        'Tamaulipas',
        'Tlaxcala',
        'Veracruz',
        'Yucatán',
        'Zacatecas',
      ],
    },
    {
      name: 'United States',
      code: 'US',
      flagUrl: '/flags/us.svg',
      regions: [
        'Alabama',
        'Alaska',
        'American Samoa',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
        'Delaware',
        'Washington DC',
        'Micronesia',
        'Florida',
        'Georgia',
        'Guam',
        'Hawaii',
        'Idaho',
        'Illinois',
        'Indiana',
        'Iowa',
        'Kansas',
        'Kentucky',
        'Louisiana',
        'Maine',
        'Marshall Islands',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
        'Northern Mariana Islands',
        'Ohio',
        'Oklahoma',
        'Oregon',
        'Palau',
        'Pennsylvania',
        'Puerto Rico',
        'Rhode Island',
        'South Carolina',
        'South Dakota',
        'Tennessee',
        'Texas',
        'Utah',
        'Vermont',
        'U.S. Virgin Islands',
        'Virginia',
        'Washington',
        'West Virginia',
        'Wisconsin',
        'Wyoming',
        'Armed Forces Americas',
        'Armed Forces Europe',
        'Armed Forces Pacific',
      ],
    },
  ]
}

// get product by handle
export async function getProductByHandle(handle: string) {
  // SKINCARE PRODUCT
  if (handle === 'demo-product-2') {
    return {
      id: 'id://Product/9895276099',
      title: 'Modal Matching shoe',
      vendor: 'All Saints',
      featured_image: {
        id: '1',
        src: '/images/shoe/shoe-white-2.webp',
        alt: 'product image',
        width: 1200,
        height: 1800,
      },
      images: [
        {
          id: '1',
          src: '/images/shoe/premium-rayon-1.webp',
          alt: 'product image',
          width: 1200,
          height: 1800,
        },
        {
          id: '2',
          src: '/images/shoe/premium-rayon-4.webp',
          alt: 'product image',
          width: 1200,
          height: 1800,
        },
        {
          id: '3',
          src: '/images/shoe/rayon-shoe.webp',
          alt: 'product image',
          width: 1200,
          height: 1800,
        },
        {
          id: '4',
          src: '/images/shoe/premium-rayon-2.webp',
          alt: 'product image',
          width: 1200,
          height: 1800,
        },
      ],
      handle: 'demo-product-2',
      descriptionHtml: `<div class="space-y-8">
           <div>
            <p>
              נעלי ג׳רזי הן קלות בצורה בלתי רגילה. עבדנו חודשים על עיצוב הבד המושלם – כזה ששומר על רעננות ונוחות לאורך כל השנה,
              עם בד ג׳רזי במבוק קליל. הבד הנושם מתאים לכל סיטואציה – מחתונות ועד לחדר כושר. זהו הבד שחייבים להכיר: שומר על הנעל יציבה
              וסטיילית לאורך כל היום.
            </p>
          </div>
            <div>
              <p class="mb-3 text-sm text-zinc-500 uppercase">Product Details</p>
              <ul class="list-inside list-disc *:marker:text-zinc-300">
                <li>200x70 ס"מ הוא הגודל הרגיל של כיסוי הראש מודל שלנו.</li>
                <li>הסט כולל שני חלקים: נעל וכובע תחתון תואם.</li>
                <li>עשוי 100% בד TENCEL™ Modal.</li>
                <li>מושלם לשכבות או ללבישה בפני עצמה.</li>
                <li>קל לניקוי ולתחזוקה.</li>
              </ul>
            </div>
            <div>
              <p class="mb-3 text-sm text-zinc-500 uppercase">Product Features</p>
              <ul class="list-inside list-disc *:marker:text-zinc-300">
                <li>The fabric allows air circulation, keeping you cool and comfortable.</li>
                <li>Lightweight and breathable, perfect for all-day wear.</li>
                <li>Soft and smooth texture, providing a luxurious feel against the skin.</li>
                <li>Versatile design that can be styled in various ways to suit your look.</li>
                <li>Available in a range of colors to match any outfit or occasion.</li>
              </ul>
            </div>
          </div>`,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra consequat diam. In metus risus, aliquam non massa tempus, gravida commodo orci.',
      publishedAt: '2019-03-27T17:43:25Z',
      collections: [
        {
          id: 'id://Collection/389242499',
          handle: 'chiffon-shoes',
          title: 'Chiffon shoes',
        },
      ],
      options: [
        {
          name: 'Color',
          optionValues: [
            {
              name: 'Black',
              swatch: {
                color: '#000000',
                image: null,
              },
            },
            {
              swatch: {
                color: 'oklch(42.1% 0.095 57.708)',
                image: null,
              },
              name: 'ורוד יארו',
            },
            {
              swatch: {
                color: '#D1C9C1',
                image: null,
              },
              name: 'indigo',
            },
            {
              swatch: {
                color: '#f7e3d4',
                image: null,
              },
              name: 'Stone',
            },
          ],
        },
        {
          name: 'Size',
          optionValues: [
            {
              swatch: null,
              name: 'XXS',
            },
            {
              swatch: null,
              name: 'XS',
            },
            {
              swatch: null,
              name: 'M',
            },
            {
              swatch: null,
              name: 'L',
            },
            {
              swatch: null,
              name: 'XL',
            },
          ],
        },
      ],
      selectedOrFirstAvailableVariant: {
        id: 'id://ProductVariant/36607622083',
        availableForSale: true,
        selectedOptions: [
          {
            name: 'Color',
            value: 'ורוד יארו',
          },
          {
            name: 'Size',
            value: 'XS',
          },
        ],
        image: {
          id: 'id://ProductImage/21279156995',
          url: 'https://cdn.shopify.com/s/files/1/1312/0893/products/001_grande_89f870ed-dc56-4990-9aa5-4f11ddf13108.jpg?v=1491918957',
          altText: null,
          width: 517,
          height: 600,
        },
        price: '$158.00',
        compareAtPrice: null,
        sku: '',
        title: 'Black / 7',
        unitPrice: null,
        product: {
          title: 'Snare Boot',
          handle: 'snare-boot',
        },
      },
      outstandingFeatures: [],
      reviewCount: 17,
      rating: 4.9,
    }
  }

  // SKINCARE PRODUCT
  if (handle === 'demo-product-3') {
    return {
      id: 'id://Product/9895276099',
      title: 'LINEN EDITION JACKET',
      handle: 'demo-product-3',
      vendor: 'All cotton',
      featured_image: {
        id: '1',
        src: '/images/fashion/jacket-1.jpg',
        alt: 'product image',
        width: 1200,
        height: 1800,
      },
      images: [
        {
          id: '1',
          src: '/images/fashion/jacket-1.jpg',
          alt: 'product image',
          width: 1200,
          height: 1800,
        },
        {
          id: '2',
          src: '/images/fashion/jacket-1-2.jpg',
          alt: 'product image',
          width: 1200,
          height: 1800,
        },
        {
          id: '3',
          src: '/images/fashion/jacket-1-3.jpg',
          alt: 'product image',
          width: 1200,
          height: 1800,
        },
        {
          id: '4',
          src: '/images/fashion/jacket-1-5.jpg',
          alt: 'product image',
          width: 1200,
          height: 1800,
        },
      ],
      descriptionHtml: `<div class="space-y-8">
            <div>
              <p>
                נעלי ג׳רזי קלות בצורה בלתי רגילה. השקענו חודשים בפיתוח הבד המושלם שמעניק תחושת רעננות ונוחות – עם בד ג׳רזי במבוק קל המתאים לכל עונה. הבד הנושם שלו אידיאלי לכל אירוע, מחתונות ועד חדר כושר. זהו הבד שחייבים להכיר – שומר על הנעל במקומה ומעניק מראה אלגנטי לאורך כל היום.
              </p>
            </div>
            <div>
              <p class="mb-3 text-sm text-zinc-500 uppercase">Product Details</p>
              <ul class="list-inside list-disc *:marker:text-zinc-300">
                <li>200x70 cm is our Regular Modal shoe Size.</li>
                <li>Two-piece set includes a shoe and matching undercap.</li>
                <li>Made from 100% TENCEL™ Modal fabric.</li>
                <li>Perfect for layering or wearing alone.</li>
                <li>Easy to care for and maintain.</li>
              </ul>
            </div>
            <div>
              <p class="mb-3 text-sm text-zinc-500 uppercase">Product Features</p>
              <ul class="list-inside list-disc *:marker:text-zinc-300">
                <li>The fabric allows air circulation, keeping you cool and comfortable.</li>
                <li>Lightweight and breathable, perfect for all-day wear.</li>
                <li>Soft and smooth texture, providing a luxurious feel against the skin.</li>
                <li>Versatile design that can be styled in various ways to suit your look.</li>
                <li>Available in a range of colors to match any outfit or occasion.</li>
              </ul>
            </div>
          </div>`,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra consequat diam. In metus risus, aliquam non massa tempus, gravida commodo orci.',
      publishedAt: '2019-03-27T17:43:25Z',
      collections: [
        {
          id: 'id://Collection/389242499',
          handle: 'jackets',
          title: 'Jackets',
        },
      ],
      options: [
        {
          name: 'Color',
          optionValues: [
            {
              name: 'Black',
              swatch: {
                color: '#000000',
                image: null,
              },
            },
            {
              swatch: {
                color: 'oklch(42.1% 0.095 57.708)',
                image: null,
              },
              name: 'ורוד יארו',
            },
            {
              swatch: {
                color: '#D1C9C1',
                image: null,
              },
              name: 'indigo',
            },
            {
              swatch: {
                color: '#f7e3d4',
                image: null,
              },
              name: 'Stone',
            },
          ],
        },
        {
          name: 'Size',
          optionValues: [
            {
              swatch: null,
              name: 'XXS',
            },
            {
              swatch: null,
              name: 'XS',
            },
            {
              swatch: null,
              name: 'M',
            },
            {
              swatch: null,
              name: 'L',
            },
            {
              swatch: null,
              name: 'XL',
            },
          ],
        },
      ],
      selectedOrFirstAvailableVariant: {
        id: 'id://ProductVariant/36607622083',
        availableForSale: true,
        selectedOptions: [
          {
            name: 'Color',
            value: 'Oyster-white',
          },
          {
            name: 'Size',
            value: 'XS',
          },
        ],
        image: {
          id: 'id://ProductImage/21279156995',
          url: 'https://cdn.shopify.com/s/files/1/1312/0893/products/001_grande_89f870ed-dc56-4990-9aa5-4f11ddf13108.jpg?v=1491918957',
          altText: null,
          width: 517,
          height: 600,
        },
        price: '$158.00',
        compareAtPrice: null,
        sku: '',
        title: 'Black / 7',
        unitPrice: null,
        product: {
          title: 'Snare Boot',
          handle: 'snare-boot',
        },
      },
      outstandingFeatures: [],
      reviewCount: 17,
      rating: 4.9,
    }
  }

  // SKINCARE PRODUCT
  return {
    id: 'id://Product/2356',
    title: 'תרסיס סרום למיצוק והזנה',
    vendor: 'דה אורדינרי',
    featured_image: {
      id: '1',
      src: '/images/skincare/face-1.webp',
      alt: 'product image',
      width: 1200,
      height: 1800,
    },
    images: [
      {
        id: '1',
        src: '/images/skincare/p2-1.webp',
        alt: 'product image',
        width: 1200,
        height: 1800,
      },
      {
        id: '2',
        src: '/images/skincare/p2-4-4.webp',
        alt: 'product image',
        width: 1200,
        height: 1800,
      },
      {
        id: '3',
        src: '/images/skincare/p2-5-5.webp',
        alt: 'product image',
        width: 1200,
        height: 1800,
      },
    ],
    handle: '',
    descriptionHtml: `<div class="space-y-8">
          <div>
            <p>
             נעלי ג׳רזי קלות בצורה בלתי רגילה. השקענו חודשים בפיתוח הבד המושלם שמעניק תחושת רעננות ונוחות – עם בד ג׳רזי במבוק קל המתאים לכל עונה. הבד הנושם שלו אידיאלי לכל אירוע, מחתונות ועד חדר כושר. זהו הבד שחייבים להכיר – שומר על הנעל במקומה ומעניק מראה אלגנטי לאורך כל היום.
            </p>
          </div>
          <div>
            <p class="mb-3 text-sm text-zinc-500 uppercase">Product Details</p>
            <ul class="list-inside list-disc *:marker:text-zinc-300">
              <li>מידת נעל ג׳רזי רגילה: 200x70 ס״מ.</li>
              <li>הסט כולל שני חלקים – נעל וכובע תואם.</li>
              <li>עשוי מבד Modal TENCEL™ 100%.</li>
              <li>מתאים לשכבות או ללבישה בפני עצמה.</li>
              <li>קל לתחזוקה וניקוי.</li>
            </ul>
          </div>
          <div>
            <p class="mb-3 text-sm text-zinc-500 uppercase">Product Features</p>
            <ul class="list-inside list-disc *:marker:text-zinc-300">
            <li>הבד מאפשר זרימת אוויר, לשמירה על תחושת רעננות ונוחות.</li>
            <li>קליל ונושם – מושלם ללבישה לאורך כל היום.</li>
            <li>מרקם רך וחלק המעניק תחושה יוקרתית על העור.</li>
            <li>עיצוב רב-שימושי שניתן לעצב בדרכים שונות לפי הסגנון שלך.</li>
            <li>זמין במגוון צבעים שמתאימים לכל הופעה או אירוע.</li>
            </ul>
          </div>
        </div>`,
    description: 'עיצוב מוקפד פוגש נוחות יומיומית. כל פריט נבחר בקפידה, עם דגש על איכות, התאמה אישית ומראה בלתי מתפשר.',
    publishedAt: '2019-03-27T17:43:25Z',
    collections: [
      {
        id: 'id://Collection/389242499',
        title: 'Face Wash',
        handle: 'face-wash',
      },
    ],
    options: [
      {
        name: 'Color',
        optionValues: [
          {
            name: 'Black',
            swatch: {
              color: '#000000',
              image: null,
            },
          },
          {
            swatch: {
              color: 'oklch(42.1% 0.095 57.708)',
              image: null,
            },
            name: 'ורוד יארו',
          },
          {
            swatch: {
              color: '#D1C9C1',
              image: null,
            },
            name: 'indigo',
          },
          {
            swatch: {
              color: '#f7e3d4',
              image: null,
            },
            name: 'Stone',
          },
        ],
      },
      {
        name: 'Size',
        optionValues: [
          {
            swatch: null,
            name: 'XXS',
          },
          {
            swatch: null,
            name: 'XS',
          },
          {
            swatch: null,
            name: 'M',
          },
          {
            swatch: null,
            name: 'L',
          },
          {
            swatch: null,
            name: 'XL',
          },
        ],
      },
    ],
    selectedOrFirstAvailableVariant: {
      id: 'id://ProductVariant/36607622083',
      availableForSale: true,
      selectedOptions: [
        {
          name: 'Color',
          value: 'ורוד יארו',
        },
        {
          name: 'Size',
          value: 'XS',
        },
      ],
      image: {
        id: 'id://ProductImage/21279156995',
        url: 'https://cdn.shopify.com/s/files/1/1312/0893/products/001_grande_89f870ed-dc56-4990-9aa5-4f11ddf13108.jpg?v=1491918957',
        altText: null,
        width: 517,
        height: 600,
      },
      price: '$158.00',
      compareAtPrice: null,
      sku: '',
      title: 'Black / 7',
      unitPrice: null,
      product: {
        title: 'Snare Boot',
        handle: 'snare-boot',
      },
    },
    outstandingFeatures: [],
    reviewCount: 17,
    rating: 4.9,
  }
}
export type TProductDetail = Awaited<ReturnType<typeof getProductByHandle>>

export async function getShopData() {
  return {
    description: 'An example shop with GraphQL.',
    name: 'graphql',
    termsOfService: {
      url: 'https://checkout.shopify.com/13120893/policies/30401347.html?locale=en',
      title: 'Terms of Service',
      id: 'gid://shopify/ShopPolicy/30401347',
      handle: 'terms-of-service',
      body: "<p><strong>OVERVIEW</strong> <br>This website is operated by graphql. Throughout the site, the terms “we”, “us” and “our” refer to graphql. graphql offers this website, including all information, tools and Services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here. <br><br>By visiting our site and/ or purchasing something from us, you engage in our “Service” and agree to be bound by the following terms and conditions (“Terms of Service”, “Terms”), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/ or contributors of content. <br><br>Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any Services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service. <br><br>Any new features or tools which are added to the current store shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes. <br><br>Our store is hosted on Shopify Inc. They provide us with the online e-commerce platform that allows us to sell our products and Services to you. <br><br><strong>SECTION 1 - ONLINE STORE TERMS</strong> <br>By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site. <br>You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws). <br>You must not transmit any worms or viruses or any code of a destructive nature. <br>A breach or violation of any of the Terms will result in an immediate termination of your Services. <br><br><strong>SECTION 2 - GENERAL CONDITIONS</strong> <br>We reserve the right to refuse Service to anyone for any reason at any time. <br>You understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices. Credit card information is always encrypted during transfer over networks. <br>You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the Service is provided, without express written permission by us. <br>The headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms. <br><br><strong>SECTION 3 - ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION</strong> <br>We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information. Any reliance on the material on this site is at your own risk. <br>This site may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only. We reserve the right to modify the contents of this site at any time, but we have no obligation to update any information on our site. You agree that it is your responsibility to monitor changes to our site. <br><br><strong>SECTION 4 - MODIFICATIONS TO THE SERVICE AND PRICES</strong> <br>Prices for our products are subject to change without notice. <br>We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time. <br>We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service. <br><br><strong>SECTION 5 - PRODUCTS OR SERVICES (if applicable)</strong> <br>Certain products or Services may be available exclusively online through the website. These products or Services may have limited quantities and are subject to return or exchange only according to our Refund Policy: [LINK TO REFUND POLICY] <br>We have made every effort to display as accurately as possible the colors and images of our products that appear at the store. We cannot guarantee that your computer monitor's display of any color will be accurate. <br>We reserve the right, but are not obligated, to limit the sales of our products or Services to any person, geographic region or jurisdiction. We may exercise this right on a case-by-case basis. We reserve the right to limit the quantities of any products or Services that we offer. All descriptions of products or product pricing are subject to change at anytime without notice, at the sole discretion of us. We reserve the right to discontinue any product at any time. Any offer for any product or Service made on this site is void where prohibited. <br>We do not warrant that the quality of any products, Services, information, or other material purchased or obtained by you will meet your expectations, or that any errors in the Service will be corrected. <br><br><strong>SECTION 6 - ACCURACY OF BILLING AND ACCOUNT INFORMATION</strong> <br>We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order. These restrictions may include orders placed by or under the same customer account, the same credit card, and/or orders that use the same billing and/or shipping address. In the event that we make a change to or cancel an order, we may attempt to notify you by contacting the e‑mail and/or billing address/phone number provided at the time the order was made. We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers or distributors. <br><br>You agree to provide current, complete and accurate purchase and account information for all purchases made at our store. You agree to promptly update your account and other information, including your email address and credit card numbers and expiration dates, so that we can complete your transactions and contact you as needed. <br><br>For more details, please review our Refund Policy: [LINK TO REFUND POLICY] <br><br><strong>SECTION 7 - OPTIONAL TOOLS</strong> <br>We may provide you with access to third-party tools over which we neither monitor nor have any control nor input. <br>You acknowledge and agree that we provide access to such tools ”as is” and “as available” without any warranties, representations or conditions of any kind and without any endorsement. We shall have no liability whatsoever arising from or relating to your use of optional third-party tools. <br>Any use by you of the optional tools offered through the site is entirely at your own risk and discretion and you should ensure that you are familiar with and approve of the terms on which tools are provided by the relevant third-party provider(s). <br>We may also, in the future, offer new Services and/or features through the website (including the release of new tools and resources). Such new features and/or Services shall also be subject to these Terms of Service. <br><br><strong>SECTION 8 - THIRD-PARTY LINKS</strong> <br>Certain content, products and Services available via our Service may include materials from third-parties. <br>Third-party links on this site may direct you to third-party websites that are not affiliated with us. We are not responsible for examining or evaluating the content or accuracy and we do not warrant and will not have any liability or responsibility for any third-party materials or websites, or for any other materials, products, or Services of third-parties. <br>We are not liable for any harm or damages related to the purchase or use of goods, Services, resources, content, or any other transactions made in connection with any third-party websites. Please review carefully the third-party's policies and practices and make sure you understand them before you engage in any transaction. Complaints, claims, concerns, or questions regarding third-party products should be directed to the third-party. <br><br><strong>SECTION 9 - USER COMMENTS, FEEDBACK AND OTHER SUBMISSIONS</strong> <br>If, at our request, you send certain specific submissions (for example contest entries) or without a request from us, you send creative ideas, suggestions, proposals, plans, or other materials, whether online, by email, by postal mail, or otherwise (collectively, 'comments'), you agree that we may, at any time, without restriction, edit, copy, publish, distribute, translate and otherwise use in any medium any comments that you forward to us. We are and shall be under no obligation (1) to maintain any comments in confidence; (2) to pay compensation for any comments; or (3) to respond to any comments. <br>We may, but have no obligation to, monitor, edit or remove content that we determine in our sole discretion to be unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene or otherwise objectionable or violates any party’s intellectual property or these Terms of Service. <br>You agree that your comments will not violate any right of any third-party, including copyright, trademark, privacy, personality or other personal or proprietary right. You further agree that your comments will not contain libelous or otherwise unlawful, abusive or obscene material, or contain any computer virus or other malware that could in any way affect the operation of the Service or any related website. You may not use a false e‑mail address, pretend to be someone other than yourself, or otherwise mislead us or third-parties as to the origin of any comments. You are solely responsible for any comments you make and their accuracy. We take no responsibility and assume no liability for any comments posted by you or any third-party. <br><br><strong>SECTION 10 - PERSONAL INFORMATION</strong> <br>Your submission of personal information through the store is governed by our Privacy Policy, which can be viewed here: [LINK TO PRIVACY POLICY] <br><br><strong>SECTION 11 - ERRORS, INACCURACIES AND OMISSIONS</strong> <br>Occasionally there may be information on our site or in the Service that contains typographical errors, inaccuracies or omissions that may relate to product descriptions, pricing, promotions, offers, product shipping charges, transit times and availability. We reserve the right to correct any errors, inaccuracies or omissions, and to change or update information or cancel orders if any information in the Service or on any related website is inaccurate at any time without prior notice (including after you have submitted your order). <br>We undertake no obligation to update, amend or clarify information in the Service or on any related website, including without limitation, pricing information, except as required by law. No specified update or refresh date applied in the Service or on any related website, should be taken to indicate that all information in the Service or on any related website has been modified or updated. <br><br><strong>SECTION 12 - PROHIBITED USES</strong> <br>In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; (f) to submit false or misleading information; (g) to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Service or of any related website, other websites, or the Internet; (h) to collect or track the personal information of others; (i) to spam, phish, pharm, pretext, spider, crawl, or scrape; (j) for any obscene or immoral purpose; or (k) to interfere with or circumvent the security features of the Service or any related website, other websites, or the Internet. We reserve the right to terminate your use of the Service or any related website for violating any of the prohibited uses. <br><br><strong>SECTION 13 - DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY</strong> <br>We do not guarantee, represent or warrant that your use of our Service will be uninterrupted, timely, secure or error-free. <br>We do not warrant that the results that may be obtained from the use of the Service will be accurate or reliable. <br>You agree that from time to time we may remove the Service for indefinite periods of time or cancel the Service at any time, without notice to you. <br>You expressly agree that your use of, or inability to use, the Service is at your sole risk. The Service and all products and Services delivered to you through the Service are (except as expressly stated by us) provided 'as is' and 'as available' for your use, without any representation, warranties or conditions of any kind, either express or implied, including all implied warranties or conditions of merchantability, merchantable quality, fitness for a particular purpose, durability, title, and non-infringement. <br>In no case shall graphql, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, Service providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, without limitation lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages, whether based in contract, tort (including negligence), strict liability or otherwise, arising from your use of any of the Service or any products procured using the Service, or for any other claim related in any way to your use of the Service or any product, including, but not limited to, any errors or omissions in any content, or any loss or damage of any kind incurred as a result of the use of the Service or any content (or product) posted, transmitted, or otherwise made available via the Service, even if advised of their possibility. Because some states or jurisdictions do not allow the exclusion or the limitation of liability for consequential or incidental damages, in such states or jurisdictions, our liability shall be limited to the maximum extent permitted by law. <br><br><strong>SECTION 14 - INDEMNIFICATION</strong> <br>You agree to indemnify, defend and hold harmless graphql and our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, Service providers, subcontractors, suppliers, interns and employees, harmless from any claim or demand, including reasonable attorneys’ fees, made by any third-party due to or arising out of your breach of these Terms of Service or the documents they incorporate by reference, or your violation of any law or the rights of a third-party. <br><br><strong>SECTION 15 - SEVERABILITY</strong> <br>In the event that any provision of these Terms of Service is determined to be unlawful, void or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms of Service, such determination shall not affect the validity and enforceability of any other remaining provisions. <br><br><strong>SECTION 16 - TERMINATION</strong> <br>The obligations and liabilities of the parties incurred prior to the termination date shall survive the termination of this agreement for all purposes. <br>These Terms of Service are effective unless and until terminated by either you or us. You may terminate these Terms of Service at any time by notifying us that you no longer wish to use our Services, or when you cease using our site. <br>If in our sole judgment you fail, or we suspect that you have failed, to comply with any term or provision of these Terms of Service, we also may terminate this agreement at any time without notice and you will remain liable for all amounts due up to and including the date of termination; and/or accordingly may deny you access to our Services (or any part thereof). <br><br><strong>SECTION 17 - ENTIRE AGREEMENT</strong> <br>The failure of us to exercise or enforce any right or provision of these Terms of Service shall not constitute a waiver of such right or provision. <br>These Terms of Service and any policies or operating rules posted by us on this site or in respect to the Service constitutes the entire agreement and understanding between you and us and governs your use of the Service, superseding any prior or contemporaneous agreements, communications and proposals, whether oral or written, between you and us (including, but not limited to, any prior versions of the Terms of Service). <br>Any ambiguities in the interpretation of these Terms of Service shall not be construed against the drafting party. <br><br><strong>SECTION 18 - GOVERNING LAW</strong> <br>These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of Canada. <br><br><strong>SECTION 19 - CHANGES TO TERMS OF SERVICE</strong> <br>You can review the most current version of the Terms of Service at any time at this page. <br>We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes. Your continued use of or access to our website or the Service following the posting of any changes to these Terms of Service constitutes acceptance of those changes. <br><br><strong>SECTION 20 - CONTACT INFORMATION</strong> <br>Questions about the Terms of Service should be sent to us at scott.walkinshaw@shopify.com. <br>Our contact information is posted below: <br>[INSERT TRADING NAME] <br>scott.walkinshaw@shopify.com <br>[INSERT BUSINESS ADDRESS] <br>[INSERT BUSINESS PHONE NUMBER] <br>[INSERT BUSINESS REGISTRATION NUMBER] <br>[INSERT VAT NUMBER]</p>",
    },
    subscriptionPolicy: {
      body: '<p>We have a 30-day return policy, which means you have 30 days after receiving your item to request a return. <br><br>To be eligible for a return, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging. You’ll also need the receipt or proof of purchase. <br><br>To start a return, you can contact us at <a href="mailto:scott.walkinshaw@shopify.com">scott.walkinshaw@shopify.com</a>. Please note that returns will need to be sent to the following address: [INSERT RETURN ADDRESS] <br><br>If your return is accepted, we’ll send you a return shipping label, as well as instructions on how and where to send your package. Items sent back to us without first requesting a return will not be accepted. <br><br>You can always contact us for any return question at <a href="mailto:scott.walkinshaw@shopify.com">scott.walkinshaw@shopify.com</a>. <br></p>\n<p><br></p>\n<p><strong>Damages and issues</strong> <br>Please inspect your order upon reception and contact us immediately if the item is defective, damaged or if you receive the wrong item, so that we can evaluate the issue and make it right.</p>\n<p><br></p>\n<p><strong>Exceptions / non-returnable items</strong> <br>Certain types of items cannot be returned, like perishable goods (such as food, flowers, or plants), custom products (such as special orders or personalized items), and personal care goods (such as beauty products). We also do not accept returns for hazardous materials, flammable liquids, or gases. Please get in touch if you have questions or concerns about your specific item. <br><br>Unfortunately, we cannot accept returns on sale items or gift cards.</p>\n<p><br></p>\n<p><strong>Exchanges</strong> <br>The fastest way to ensure you get what you want is to return the item you have, and once the return is accepted, make a separate purchase for the new item.</p>\n<p><br></p>\n<p><strong>European Union 14 day cooling off period</strong> <br>Notwithstanding the above, if the merchandise is being shipped into the European Union, you have the right to cancel or return your order within 14 days, for any reason and without a justification. As above, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging. You’ll also need the receipt or proof of purchase.</p>\n<p><br></p>\n<p><strong>Refunds</strong> <br>We will notify you once we’ve received and inspected your return, and let you know if the refund was approved or not. If approved, you’ll be automatically refunded on your original payment method within 10 business days. Please remember it can take some time for your bank or credit card company to process and post the refund too. <br>If more than 15 business days have passed since we’ve approved your return, please contact us at scott.walkinshaw@shopify.com.</p>',
      handle: 'refund-policy',
      id: 'gid://shopify/ShopPolicy/30401219',
      title: 'Refund Policy',
      url: 'https://checkout.shopify.com/13120893/policies/30401219.html?locale=en',
    },
    shippingPolicy: {
      body: '<p>Shipping Policy</p>',
      handle: 'shipping-policy',
      id: 'gid://shopify/ShopPolicy/23745298488',
      title: 'Shipping Policy',
      url: 'https://checkout.shopify.com/13120893/policies/23745298488.html?locale=en',
    },
    refundPolicy: {
      body: '<p>We have a 30-day return policy, which means you have 30 days after receiving your item to request a return. <br><br>To be eligible for a return, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging. You’ll also need the receipt or proof of purchase. <br><br>To start a return, you can contact us at <a href="mailto:scott.walkinshaw@shopify.com">scott.walkinshaw@shopify.com</a>. Please note that returns will need to be sent to the following address: [INSERT RETURN ADDRESS] <br><br>If your return is accepted, we’ll send you a return shipping label, as well as instructions on how and where to send your package. Items sent back to us without first requesting a return will not be accepted. <br><br>You can always contact us for any return question at <a href="mailto:scott.walkinshaw@shopify.com">scott.walkinshaw@shopify.com</a>. <br></p>\n<p><br></p>\n<p><strong>Damages and issues</strong> <br>Please inspect your order upon reception and contact us immediately if the item is defective, damaged or if you receive the wrong item, so that we can evaluate the issue and make it right.</p>\n<p><br></p>\n<p><strong>Exceptions / non-returnable items</strong> <br>Certain types of items cannot be returned, like perishable goods (such as food, flowers, or plants), custom products (such as special orders or personalized items), and personal care goods (such as beauty products). We also do not accept returns for hazardous materials, flammable liquids, or gases. Please get in touch if you have questions or concerns about your specific item. <br><br>Unfortunately, we cannot accept returns on sale items or gift cards.</p>\n<p><br></p>\n<p><strong>Exchanges</strong> <br>The fastest way to ensure you get what you want is to return the item you have, and once the return is accepted, make a separate purchase for the new item.</p>\n<p><br></p>\n<p><strong>European Union 14 day cooling off period</strong> <br>Notwithstanding the above, if the merchandise is being shipped into the European Union, you have the right to cancel or return your order within 14 days, for any reason and without a justification. As above, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging. You’ll also need the receipt or proof of purchase.</p>\n<p><br></p>\n<p><strong>Refunds</strong> <br>We will notify you once we’ve received and inspected your return, and let you know if the refund was approved or not. If approved, you’ll be automatically refunded on your original payment method within 10 business days. Please remember it can take some time for your bank or credit card company to process and post the refund too. <br>If more than 15 business days have passed since we’ve approved your return, please contact us at scott.walkinshaw@shopify.com.</p>',
      handle: 'refund-policy',
      id: 'gid://shopify/ShopPolicy/30401219',
      title: 'Refund Policy',
      url: 'https://checkout.shopify.com/13120893/policies/30401219.html?locale=en',
    },
    privacyPolicy: {
      body: '<p>Last updated: December 17, 2024</p>\n\n<p>This Privacy Policy describes how graphql (the "Site", "we", "us", or "our") collects, uses, and discloses your personal information when you visit, use our services, or make a purchase from graphql.myshopify.com (the "Site") or otherwise communicate with us regarding the Site (collectively, the "Services"). For purposes of this Privacy Policy, "you" and "your" means you as the user of the Services, whether you are a customer, website visitor, or another individual whose information we have collected pursuant to this Privacy Policy.</p>\n\n<p>Please read this Privacy Policy carefully.</p>\n\n<h2>Changes to This Privacy Policy</h2>\n<p>We may update this Privacy Policy from time to time, including to reflect changes to our practices or for other operational, legal, or regulatory reasons. We will post the revised Privacy Policy on the Site, update the "Last updated" date and take any other steps required by applicable law.</p>\n\n<h2>How We Collect and Use Your Personal Information</h2>\n<p>To provide the Services, we collect and have collected over the past 12 months personal information about you from a variety of sources, as set out below. The information that we collect and use varies depending on how you interact with us.</p>\n\n<p>In addition to the specific uses set out below, we may use information we collect about you to communicate with you, provide or improve or improve the Services, comply with any applicable legal obligations, enforce any applicable terms of service, and to protect or defend the Services, our rights, and the rights of our users or others.</p>\n\n<h3>What Personal Information We Collect</h3>\n<p>The types of personal information we obtain about you depends on how you interact with our Site and use our Services. When we use the term "personal information", we are referring to information that identifies, relates to, describes or can be associated with you. The following sections describe the categories and specific types of personal information we collect.</p>\n\n<h3>Information We Collect Directly from You</h3>\n<p>Information that you directly submit to us through our Services may include:</p>\n<ul>\n    <li><strong>Contact details</strong> including your name, address, phone number, and email.</li>\n    <li><strong>Order information</strong> including your name, billing address, shipping address, payment confirmation, email address, and phone number.</li>\n    <li><strong>Account information</strong> including your username, password, security questions and other information used for account security purposes.</li>\n    \n    <li><strong>Customer support information</strong> including the information you choose to include in communications with us, for example, when sending a message through the Services.</li>\n</ul>\n\n<p>Some features of the Services may require you to directly provide us with certain information about yourself. You may elect not to provide this information, but doing so may prevent you from using or accessing these features.</p>\n\n<h3>Information We Collect about Your Usage</h3>\n<p>We may also automatically collect certain information about your interaction with the Services ("<strong>Usage Data</strong>"). To do this, we may use cookies, pixels and similar technologies ("<strong>Cookies</strong>"). Usage Data may include information about how you access and use our Site and your account, including device information, browser information, information about your network connection, your IP address and other information regarding your interaction with the Services.</p>\n\n<h3>Information We Obtain from Third Parties</h3>\n<p>Finally, we may obtain information about you from third parties, including from vendors and service providers who may collect information on our behalf, such as:</p>\n<ul>\n    <li>Companies who support our Site and Services, such as Shopify.</li>\n    <li>Our payment processors, who collect payment information (e.g., bank account, credit or debit card information, billing address) to process your payment in order to fulfill your orders and provide you with products or services you have requested, in order to perform our contract with you.</li>\n    <li>When you visit our Site, open or click on emails we send you, or interact with our Services or advertisements, we, or third parties we work with, may automatically collect certain information using online tracking technologies such as pixels, web beacons, software developer kits, third-party libraries, and cookies.</li>\n</ul>\n<p>Any information we obtain from third parties will be treated in accordance with this Privacy Policy. Also see the section below, <i>Third Party Websites and Links.</i></p>\n\n<h3>How We Use Your Personal Information</h3>\n<ul>\n    <li><strong>Providing Products and Services.</strong> We use your personal information to provide you with the Services in order to perform our contract with you, including to process your payments, fulfill your orders, to send notifications to you related to your account, purchases, returns, exchanges or other transactions, to create, maintain and otherwise manage your account, to arrange for shipping, facilitate any returns and exchanges and other features and functionalities related to your account. We may also enhance your shopping experience by enabling Shopify to match your account with other Shopify services that you may choose to use. In this case, Shopify will process your information as set forth in its Privacy Policy and Consumer Privacy Policy.</li>\n    <li><strong>Marketing and Advertising.</strong> We may use your personal information for marketing and promotional purposes, such as to send marketing, advertising and promotional communications by email, text message or postal mail, and to show you advertisements for products or services. This may include using your personal information to better tailor the Services and advertising on our Site and other websites. If you are an EEA resident, the legal basis for these data processing activities is our legitimate interest in selling our products, according to Art. 6 (1) (f) GDPR.</li>\n    <li><strong>Security and Fraud Prevention.</strong> We use your personal information to detect, investigate or take action regarding possible fraudulent, illegal or malicious activity. If you choose to use the Services and register an account, you are responsible for keeping your account credentials safe. We highly recommend that you do not share your username, password, or other access details with anyone else. If you believe your account has been compromised, please contact us immediately. If you are an EEA resident, the legal basis for these data processing activities is our legitimate interest in keeping our website secure for you and other customers, according to Art. 6 (1) (f) GDPR.</li>\n    <li><strong>Communicating with You and Service Improvement.</strong> We use your personal information to provide you with customer support and improve our Services. This is in our legitimate interests in order to be responsive to you, to provide effective services to you, and to maintain our business relationship with you according to Art. 6 (1) (f) GDPR.</li>\n</ul>\n\n<h2>Cookies</h2>\n<p>Like many websites, we use Cookies on our Site. For specific information about the Cookies that we use related to powering our store with Shopify, see <a href="https://www.shopify.com/legal/cookies" target="_blank">https://www.shopify.com/legal/cookies</a>. We use Cookies to power and improve our Site and our Services (including to remember your actions and preferences), to run analytics and better understand user interaction with the Services (in our legitimate interests to administer, improve and optimize the Services). We may also permit third parties and services providers to use Cookies on our Site to better tailor the services, products and advertising on our Site and other websites.</p>\n\n<p>Most browsers automatically accept Cookies by default, but you can choose to set your browser to remove or reject Cookies through your browser controls. Please keep in mind that removing or blocking Cookies can negatively impact your user experience and may cause some of the Services, including certain features and general functionality, to work incorrectly or no longer be available. Additionally, blocking Cookies may not completely prevent how we share information with third parties such as our advertising partners.</p>\n\n\n<p>Please note that while your browser may allow you to transmit a “do not track” signal, like many websites, our Site is not designed to respond to such signals. To learn more about “do not track” signals, you can visit <a href="http://www.allaboutdnt.com" target="_blank">http://www.allaboutdnt.com/</a>.</p>\n\n\n<h2>How We Disclose Personal Information</h2>\n<p>In certain circumstances, we may disclose your personal information to third parties for contract fulfillment purposes, legitimate purposes and other reasons subject to this Privacy Policy. Such circumstances may include:</p>\n<ul>\n    <li>With vendors or other third parties who perform services on our behalf (e.g., IT management, payment processing, data analytics, customer support, cloud storage, fulfillment and shipping).</li>\n    <li>With business and marketing partners to provide services and advertise to you. Our business and marketing partners will use your information in accordance with their own privacy notices.</li>\n    <li>When you direct, request us or otherwise consent to our disclosure of certain information to third parties, such as to ship you products or through your use of social media widgets or login integrations, with your consent.</li>\n    <li>With our affiliates or otherwise within our corporate group, in our legitimate interests to run a successful business.</li>\n    <li>In connection with a business transaction such as a merger or bankruptcy, to comply with any applicable legal obligations (including to respond to subpoenas, search warrants and similar requests), to enforce any applicable terms of service, and to protect or defend the Services, our rights, and the rights of our users or others.</li>\n</ul>\n\n<p>We have in the past 12 months disclosed the following categories of personal information and sensitive personal information about users for the purposes set out above in <i>"How we Collect and Use your Personal Information"</i> and <i>"How we Disclose Personal Information"</i>:</p>\n<table>\n<tr>\n    <th>Category</th>\n    <th>Categories of Recipients</th>\n</tr>\n<tr>\n    <td>\n        <ul>\n            <li>Identifiers such as basic contact details and certain order and account information</li>\n            <li>Personal information categories listed in the California Customer Records statute such as basic contact details and certain order and account information</li>\n            <li>Commercial information such as order information, shopping information and customer support information</li>\n            <li>Internet or other similar network activity, such as Usage Data</li>\n            <li>Geolocation data such as locations determined by an IP address or other technical measures</li>\n        </ul>\n    </td>\n    <td>\n        <ul>\n            <li>Vendors and third parties who perform services on our behalf (such as Internet service providers, payment processors, fulfillment partners, customer support partners and data analytics providers)</li>\n            <li>Business and marketing partners</li>\n            <li>Affiliates</li>\n        </ul>\n    </td>\n</tr>\n</table>\n<p>We do not use or disclose sensitive personal information without your consent or for the purposes of inferring characteristics about you.</p>\n\n\n\n\n<h2>Third Party Websites and Links</h2>\n<p>Our Site may provide links to websites or other online platforms operated by third parties. If you follow links to sites not affiliated or controlled by us, you should review their privacy and security policies and other terms and conditions. We do not guarantee and are not responsible for the privacy or security of such sites, including the accuracy, completeness, or reliability of information found on these sites. Information you provide on public or semi-public venues, including information you share on third-party social networking platforms may also be viewable by other users of the Services and/or users of those third-party platforms without limitation as to its use by us or by a third party. Our inclusion of such links does not, by itself, imply any endorsement of the content on such platforms or of their owners or operators, except as disclosed on the Services.</p>\n\n<h2>Children\'s Data</h2>\n<p>The Services are not intended to be used by children, and we do not knowingly collect any personal information about children. If you are the parent or guardian of a child who has provided us with their personal information, you may contact us using the contact details set out below to request that it be deleted.</p>\n\n<p>As of the Effective Date of this Privacy Policy, we do not have actual knowledge that we “share” or “sell” (as those terms are defined in applicable law) personal information of individuals under 16 years of age.</p>\n\n<h2>Security and Retention of Your Information</h2>\n<p>Please be aware that no security measures are perfect or impenetrable, and we cannot guarantee “perfect security.” In addition, any information you send to us may not be secure while in transit. We recommend that you do not use insecure channels to communicate sensitive or confidential information to us.</p>\n\n<p>How long we retain your personal information depends on different factors, such as whether we need the information to maintain your account, to provide the Services, comply with legal obligations, resolve disputes or enforce other applicable contracts and policies.</p>\n\n<h2>Your Rights</h2>\n<p>Depending on where you live, you may have some or all of the rights listed below in relation to your personal information. However, these rights are not absolute, may apply only in certain circumstances and, in certain cases, we may decline your request as permitted by law.</p>\n<ul>\n    <li><strong>Right to Access / Know</strong>: You may have a right to request access to personal information that we hold about you, including details relating to the ways in which we use and share your information.</li>\n    <li><strong>Right to Delete</strong>: You may have a right to request that we delete personal information we maintain about you.</li>\n    <li><strong>Right to Correct</strong>: You may have a right to request that we correct inaccurate personal information we maintain about you.</li>\n    <li><strong>Right of Portability</strong>: You may have a right to receive a copy of the personal information we hold about you and to request that we transfer it to a third party, in certain circumstances and with certain exceptions.</li>\n    \n    <li><strong>Restriction of Processing</strong>: You may have the right to ask us to stop or restrict our processing of personal information.</li>\n    <li><strong>Withdrawal of Consent</strong>: Where we rely on consent to process your personal information, you may have the right to withdraw this consent.</li>\n    <li><strong>Appeal</strong>: You may have a right to appeal our decision if we decline to process your request. You can do so by replying directly to our denial.</li>\n    <li><strong>Managing Communication Preferences</strong>: We may send you promotional emails, and you may opt out of receiving these at any time by using the unsubscribe option displayed in our emails to you. If you opt out, we may still send you non-promotional emails, such as those about your account or orders that you have made.</li>\n</ul>\n<p>You may exercise any of these rights where indicated on our Site or by contacting us using the contact details provided below.</p>\n\n<p>We will not discriminate against you for exercising any of these rights. We may need to collect information from you to verify your identity, such as your email address or account information, before providing a substantive response to the request. In accordance with applicable laws, you may designate an authorized agent to make requests on your behalf to exercise your rights. Before accepting such a request from an agent, we will require that the agent provide proof you have authorized them to act on your behalf, and we may need you to verify your identity directly with us. We will respond to your request in a timely manner as required under applicable law.</p>\n\n\n<h2>Complaints</h2>\n<p>If you have complaints about how we process your personal information, please contact us using the contact details provided below. If you are not satisfied with our response to your complaint, depending on where you live you may have the right to appeal our decision by contacting us using the contact details set out below, or lodge your complaint with your local data protection authority. For the EEA, you can find a list of the responsible data protection supervisory authorities <a href="https://edpb.europa.eu/about-edpb/about-edpb/members" target="_blank">here</a>.</p>\n\n<h2>International Users</h2>\n<p>Please note that we may transfer, store and process your personal information outside the country you live in. Your personal information is also processed by staff and third party service providers and partners in these countries.</p>\n<p>If we transfer your personal information out of Europe, we will rely on recognized transfer mechanisms like the European Commission\'s Standard Contractual Clauses, or any equivalent contracts issued by the relevant competent authority of the UK, as relevant, unless the data transfer is to a country that has been determined to provide an adequate level of protection.</p>\n\n<h2>Contact</h2>\n<p>Should you have any questions about our privacy practices or this Privacy Policy, or if you would like to exercise any of the rights available to you, please call or email us at scott.walkinshaw@shopify.com or contact us at 80 Spadina Ave, Toronto, ON, M5V 2J4, CA.</p>\n<p>For the purpose of applicable data protection laws and if not explicitly stated otherwise, we are the data controller of your personal information.</p>\n\n<span></span>',
      handle: 'privacy-policy',
      id: 'gid://shopify/ShopPolicy/30401283',
      title: 'Privacy Policy',
      url: 'https://checkout.shopify.com/13120893/policies/30401283.html?locale=en',
    },
    primaryDomain: {
      url: 'https://graphql.myshopify.com',
    },
  }
}

export function getProductReviews() {
  return [
    {
      id: 1,
      title: "Can't say enough good things",
      rating: 5,
      content: `
        <p>I was really pleased with the overall shopping experience. My order even included a little personal, handwritten note, which delighted me!</p>
        <p>The product quality is amazing, it looks and feel even better than I had anticipated. </p>
      `,
      author: 'S. Walkinshaw',
      date: 'May 16, 2025',
      datetime: '2025-01-06',
    },
    {
      id: 2,
      title: 'Perfect for going out when you want to stay comfy',
      rating: 5,
      content: `
        <p>The product quality is amazing, it looks and feel even better than I had anticipated.</p>
        <p>I like it better than a regular hoody because it is tailored to be a slimmer fit. Perfect for going out when you want to stay comfy. The head opening is a little tight which makes it a little.</p>
      `,
      author: 'Risako M',
      date: 'May 16, 2025',
      datetime: '2025-01-06',
    },
    {
      id: 3,
      title: 'Very nice feeling sweater!',
      rating: 5,
      content: `
        <p> I would gladly recommend this store to my friends. And, now that I think of it... I actually have, many times.</p>
        <p>The product quality is amazing!</p>
      `,
      author: 'Eden Birch',
      date: 'May 16, 2025',
      datetime: '2025-01-06',
    },
  ]
}

export function getBlogPosts() {
  return [
    {
      id: 1,
      title: 'Graduation Dresses: A Style Guide',
      handle: 'graduation-dresses-style-guide',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      imageUrl: '/images/blog1.jpg',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      timeToRead: '2 min read',
    },
    {
      id: 2,
      title: 'How to Wear Your Eid Pieces All Year Long',
      handle: 'how-to-wear-your-eid-pieces-all-year-long',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      imageUrl: '/images/blog2.jpg',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      timeToRead: '3 min read',
    },
    {
      id: 3,
      title: 'The Must-Have shoei Friendly Fabrics for 2024',
      handle: 'the-must-have-shoei-friendly-fabrics-for-2024',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      imageUrl: '/images/blog3.jpg',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      timeToRead: '3 min read',
    },
    {
      id: 4,
      title: 'The shoei Friendly Fabrics for 2025',
      handle: 'the-must-have-shoei-friendly-fabrics-for',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      imageUrl: '/images/blog4.jpg',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      timeToRead: '3 min read',
    },
    {
      id: 5,
      title: 'Boost your conversion rate',
      handle: 'boost-your-conversion-rate',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      imageUrl: '/images/blog5.jpg',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      timeToRead: '3 min read',
    },
    {
      id: 6,
      title: 'Graduation Dresses: A Style Guide',
      handle: 'graduation-dresses-style-guide',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      imageUrl: '/images/blog6.jpg',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      timeToRead: '3 min read',
    },
  ]
}

export function getBlogPostsByHandle(handle: string) {
  return {
    id: 1,
    title: 'Graduation Dresses: A Style Guide',
    handle: 'graduation-dresses-style-guide',
    excerpt:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde.',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    featuredImage: {
      src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Graduation Dresses: A Style Guide',
      width: 3773,
      height: 600,
    },

    date: 'Mar 16, 2025',
    datetime: '2025-03-16',
    category: { title: 'Marketing', href: '#' },
    timeToRead: '2 min read',
    content: `
      <p>Beauty is a universal language, but its dialects vary greatly across cultures. From the intricate rituals of Japan to the natural ingredients of Brazil, each country has its unique beauty secrets. In this article, we'll embark on a journey to explore the diverse beauty traditions from around the world.</p><p></p><p>For centuries, women have been sharing their beauty secrets with each other, passing down recipes and rituals from generation to generation. These secrets are often rooted in the local culture, climate, and available ingredients. By exploring these beauty secrets, we can gain a deeper understanding of the diverse beauty traditions that exist globally.</p><p></p><p>In today's world, where beauty standards are often dictated by social media, it's refreshing to discover beauty secrets that are rooted in tradition and natural ingredients. Whether you're looking for a new skincare routine, a hair treatment, or a makeup tip, there's something to learn from the beauty secrets of other cultures.</p><p></p><p class="block-img"><img src="https://images.unsplash.com/photo-1746240922260-efbea47dc532?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"  alt="Spa"></p><p></p><h2>7 Time-Tested Beauty Secrets from <em>Around the World</em></h2><h3>1. Japan: Rice Bran Baths for Soft Skin</h3><p>Rice bran is revered for its moisturizing properties. Women have been using rice bran baths for centuries to soften and whiten their skin. Simply soak in a warm bath infused with rice bran oil and milk to experience the benefits.</p><p></p><h3>2. India: Turmeric Face Masks for Glowing Complexion</h3><p>Turmeric has been a staple in Indian beauty rituals for thousands of years. Mix turmeric powder with yogurt and honey to create a face mask that will leave your skin glowing.</p><p></p><h3>3. Morocco: Argan Oil for Luxurious Hair and Skin</h3><p>Argan oil is rich in antioxidants and essential fatty acids, nourishing and protecting hair and skin. Use it as a hair mask, moisturizer, or makeup remover to experience its benefits.</p><p></p><h3>4. Korea: Snail Mucin for Hydrated Skin</h3><p>Snail mucin is packed with hyaluronic acid, glycoproteins, and glycolic acid, making it a potent hydrator. Apply snail mucin creams or serums to lock in moisture and soothe dry skin.</p><p></p><h3>5. Brazil: Coconut Oil for Healthy Hair and Skin</h3><p>Coconut oil nourishes and moisturizes hair and skin, leaving them healthy and radiant. Use coconut oil as a hair mask, moisturizer, or makeup remover to experience its benefits.</p><p></p><h3>6. Egypt: Milk and Honey Baths for Soft Skin</h3><p>Milk and honey baths have been used for centuries to soften and whiten skin. The lactic acid in milk gently exfoliates, while honey provides antibacterial properties.</p><p></p><h3>7. China: Green Tea for Anti-Aging</h3><p>Green tea has potent anti-aging properties, reducing fine lines and wrinkles. Drink green tea regularly or apply green tea-infused creams and serums to experience its benefits.</p><p></p><p>By incorporating these beauty secrets into your routine, you'll not only enhance your natural beauty but also connect with the rich cultural heritage of these countries. Whether you're looking for a new skincare routine or a hair treatment, there's something to learn from the beauty secrets of other cultures.</p> 
    `,
    author: {
      name: 'S. Walkinshaw',
    },
  }
}

export function getCartProducts() {
  return [
    {
      id: 1,
      name: 'מוצר מנצח',
      handle: 'basic-tee',
      price: '$32.00',
      color: 'Sienna',
      inStock: true,
      size: 'Large',
      imageSrc: '/images/shoe/shoe-coral-1.webp',
      imageAlt: "Front of men's Basic Tee in sienna.",
      quantity: 1,
    },
    {
      id: 2,
      name: 'נעל מגניבה',
      handle: 'basic-tee',
      price: '$32.00',
      color: 'Black',
      inStock: false,
      leadTime: '3–4 weeks',
      size: 'Large',
      imageSrc: '/images/shoe/shoe-coral-2.webp',
      imageAlt: "Front of men's Basic Tee in black.",
      quantity: 1,
    },
    {
      id: 3,
      name: 'נעל שחורה',
      handle: 'nomad-tumbler',
      price: '$35.00',
      color: 'White',
      inStock: true,
      imageSrc: '/images/shoe/shoe-yellow-2.webp',
      imageAlt: 'Insulated bottle with white base and black snap lid.',
      quantity: 1,
    },
  ]
}

// ------------------------ SKINCARE DATA ------------------------
// ------------------------ SKINCARE DATA ------------------------
export async function getSkincareCollections() {
  return [
    {
      id: '1',
      title: 'שטיפת פנים',
      handle: 'face-wash',
      description: 'תכשיר ניקוי עדין לכל סוגי העור. מסיר לכלוך ואיפור. מותיר את העור רענן ונקי. מושלם לשימוש יומיומי.',
      updatedAt: '2025-05-06T10:00:00-04:00',
      image: '/images/skincare/feature-6.webp',
      url: '/collections/face-wash',
      products: [
        {
          id: 1001,
          title: 'Clay Mask',
          handle: 'clay-mask',
          description: 'A detoxifying clay mask to purify and refine pores.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'GlowBeauty',
          type: 'Mask',
          tags: ['Oily Skin', 'Detox'],
          price: 2000,
          price_min: 2000,
          price_max: 2000,
          images: ['/images/skincare/face-1.webp', '/images/skincare/face-1-1.webp'],
          featured_image: '/images/skincare/face-1.webp',
          url: '/products/clay-mask',
          variants: [
            {
              id: 10011,
              title: 'Clay Mask',
              price: 2000,
              selectedOptions: [{ name: 'Size', value: '100g' }],
            },
          ],
        },
        {
          id: 1002,
          title: 'Hydrating Sheet Mask',
          handle: 'hydrating-sheet-mask',
          description: 'A soothing sheet mask for instant hydration and glow.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'GlowBeauty',
          type: 'Mask',
          tags: ['Hydrating', 'All Skin Types'],
          price: 800,
          price_min: 800,
          price_max: 800,
          images: ['/images/skincare/face-2.webp', '/images/skincare/face-2-2.webp'],
          featured_image: '/images/skincare/face-2.webp',
          url: '/products/hydrating-sheet-mask',
          variants: [
            {
              id: 10021,
              title: 'Hydrating Sheet Mask',
              price: 800,
              selectedOptions: [{ name: 'Size', value: '1 sheet' }],
            },
          ],
        },
        {
          id: 1003,
          title: 'Exfoliating Mask',
          handle: 'exfoliating-mask',
          description: 'A gentle exfoliating mask to remove dead skin and reveal radiance.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'GlowBeauty',
          type: 'Mask',
          tags: ['Exfoliating', 'Brightening'],
          price: 2500,
          price_min: 2500,
          price_max: 2500,
          images: ['/images/skincare/face-3.webp', '/images/skincare/face-3-3.webp'],
          featured_image: '/images/skincare/face-3.webp',
          url: '/products/exfoliating-mask',
          variants: [
            {
              id: 10031,
              title: 'Exfoliating Mask',
              price: 2500,
              selectedOptions: [{ name: 'Size', value: '100g' }],
            },
          ],
        },
        {
          id: 1004,
          title: 'Charcoal Mask',
          handle: 'charcoal-mask',
          description: 'A deep-cleansing charcoal mask to draw out impurities.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'GlowBeauty',
          type: 'Mask',
          tags: ['Detox', 'Oily Skin'],
          price: 2200,
          price_min: 2200,
          price_max: 2200,
          images: ['/images/skincare/face-4.webp', '/images/skincare/face-2-2.webp'],
          featured_image: '/images/skincare/face-4.webp',
          url: '/products/charcoal-mask',
          variants: [
            {
              id: 10041,
              title: 'Charcoal Mask',
              price: 2200,
              selectedOptions: [{ name: 'Size', value: '100g' }],
            },
          ],
        },
        {
          id: 1005,
          title: 'Overnight Mask',
          handle: 'overnight-mask',
          description: 'A nourishing overnight mask for intense hydration and repair.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'GlowBeauty',
          type: 'Mask',
          tags: ['Hydrating', 'Night'],
          price: 3000,
          price_min: 3000,
          price_max: 3000,
          images: ['/images/skincare/face-5.webp', '/images/skincare/face-3-3.webp'],
          featured_image: '/images/skincare/face-5.webp',
          url: '/products/overnight-mask',
          variants: [
            {
              id: 10051,
              title: 'Overnight Mask',
              price: 3000,
              selectedOptions: [{ name: 'Size', value: '100g' }],
            },
          ],
        },
      ],
    },
    {
      id: '2',
      title: 'תכשירי ניקוי',
      handle: 'cleansers',
      description: 'תכשירי ניקוי עדינים ויעילים להסרת לכלוך ורענון העור מדי יום. מתאימים לכל סוגי העור.',
      updatedAt: '2025-05-06T10:00:00-04:00',
      image: '/images/skincare/c1.webp',
      url: '/collections/cleansers',
      products: [
        {
          id: 1001,
          title: 'Foaming Facial Cleanser',
          handle: 'foaming-facial-cleanser',
          description: 'A lightweight foam cleanser that deeply cleanses without stripping natural oils.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'GlowBeauty',
          type: 'Cleanser',
          tags: ['Daily', 'All Skin Types'],
          price: 1500,
          price_min: 1500,
          price_max: 1500,
          images: ['/images/skincare/p2-1.webp', '/images/skincare/p2-1-1.webp'],
          featured_image: '/images/skincare/p2-1.webp',
          url: '/products/foaming-facial-cleanser',
          variants: [
            {
              id: 10011,
              title: 'Foaming Facial Cleanser',
              price: 1500,
              selectedOptions: [{ name: 'Size', value: '200ml' }],
            },
          ],
        },
        {
          id: 1002,
          title: 'Gel Cleanser',
          handle: 'gel-cleanser',
          description: 'A refreshing gel cleanser ideal for oily and combination skin types.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'GlowBeauty',
          type: 'Cleanser',
          tags: ['Oily Skin', 'Daily'],
          price: 1800,
          price_min: 1800,
          price_max: 1800,
          images: ['/images/skincare/p2-2.webp', '/images/skincare/p2-2-2.webp'],
          featured_image: '/images/skincare/p2-2.webp',
          url: '/products/gel-cleanser',
          variants: [
            {
              id: 10021,
              title: 'Gel Cleanser',
              price: 1800,
              selectedOptions: [{ name: 'Size', value: '150ml' }],
            },
          ],
        },
        {
          id: 1003,
          title: 'Cream Cleanser',
          handle: 'cream-cleanser',
          description: 'A nourishing cream cleanser that hydrates while cleansing dry skin.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'GlowBeauty',
          type: 'Cleanser',
          tags: ['Dry Skin', 'Hydrating'],
          price: 2000,
          price_min: 2000,
          price_max: 2000,
          images: ['/images/skincare/p2-3.webp', '/images/skincare/p2-3-3.webp'],
          featured_image: '/images/skincare/p2-3.webp',
          url: '/products/cream-cleanser',
          variants: [
            {
              id: 10031,
              title: 'Cream Cleanser',
              price: 2000,
              selectedOptions: [{ name: 'Size', value: '150ml' }],
            },
          ],
        },
        {
          id: 1004,
          title: 'Micellar Water',
          handle: 'micellar-water',
          description: 'A gentle micellar water that removes makeup and impurities effortlessly.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'GlowBeauty',
          type: 'Cleanser',
          tags: ['Makeup Remover', 'Sensitive Skin'],
          price: 1200,
          price_min: 1200,
          price_max: 1200,
          images: ['/images/skincare/p2-4.webp', '/images/skincare/p2-4-4.webp'],
          featured_image: '/images/skincare/p2-4.webp',
          url: '/products/micellar-water',
          variants: [
            {
              id: 10041,
              title: 'Micellar Water',
              price: 1200,
              selectedOptions: [{ name: 'Size', value: '400ml' }],
            },
          ],
        },
        {
          id: 1005,
          title: 'Oil Cleanser',
          handle: 'oil-cleanser',
          description: 'A luxurious oil cleanser that melts away makeup and nourishes the skin.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'GlowBeauty',
          type: 'Cleanser',
          tags: ['Makeup Remover', 'Dry Skin'],
          price: 2500,
          price_min: 2500,
          price_max: 2500,
          images: ['/images/skincare/p2-5.webp', '/images/skincare/p2-5-5.webp'],
          featured_image: '/images/skincare/p2-5.webp',
          url: '/products/oil-cleanser',
          variants: [
            {
              id: 10051,
              title: 'Oil Cleanser',
              price: 2500,
              selectedOptions: [{ name: 'Size', value: '100ml' }],
            },
          ],
        },
      ],
    },
    {
      id: '3',
      title: 'כלי טיפוח',
      handle: 'beauty-tools',
      description: 'כלי טיפוח חיוניים לשדרוג שגרת הטיפוח שלך ולהשגת תוצאות של מכון יופי בבית.',
      updatedAt: '2025-05-06T10:00:00-04:00',
      image: '/images/skincare/p2-1-1.webp',
      url: '/collections/serums',
      products: [
        {
          id: 3001,
          title: 'סרום ויטמין C',
          handle: 'vitamin-c-serum',
          description: 'סרום להבהרה עם ויטמין C לאחידות גוון העור ולזוהר.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'GlowBeauty',
          type: 'סרום',
          tags: ['הבהרה', 'יומיומי'],
          price: 3200,
          price_min: 3200,
          price_max: 3200,
          images: ['/images/skincare/p3-1.webp', '/images/skincare/p3-4.webp'],
          featured_image: '/images/skincare/p3-1.webp',
          url: '/products/vitamin-c-serum',
          variants: [
            {
              id: 30011,
              title: 'סרום ויטמין C',
              price: 3200,
              selectedOptions: [{ name: 'Size', value: '30ml' }],
            },
          ],
        },
        {
          id: 3002,
          title: 'סרום חומצה היאלורונית',
          handle: 'hyaluronic-acid-serum',
          description: 'סרום לחות שמעניק נפח ולחות לעור.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'GlowBeauty',
          type: 'סרום',
          tags: ['לחות', 'לכל סוגי העור'],
          price: 2800,
          price_min: 2800,
          price_max: 2800,
          images: ['/images/skincare/p3-2.webp', '/images/skincare/p3-5-5.webp'],
          featured_image: '/images/skincare/p3-2.webp',
          url: '/products/hyaluronic-acid-serum',
          variants: [
            {
              id: 30021,
              title: 'סרום חומצה היאלורונית',
              price: 2800,
              selectedOptions: [{ name: 'Size', value: '30ml' }],
            },
          ],
        },
        {
          id: 3003,
          title: 'סרום רטינול',
          handle: 'retinol-serum',
          description: 'סרום רטינול עוצמתי להפחתת קמטים ושיפור מרקם העור.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'GlowBeauty',
          type: 'סרום',
          tags: ['אנטי אייג׳ינג', 'לילה'],
          price: 4500,
          price_min: 4500,
          price_max: 4500,
          images: ['/images/skincare/p3-3.webp', '/images/skincare/p3-1.webp'],
          featured_image: '/images/skincare/p3-3.webp',
          url: '/products/retinol-serum',
          variants: [
            {
              id: 30031,
              title: 'סרום רטינול',
              price: 4500,
              selectedOptions: [{ name: 'Size', value: '30ml' }],
            },
          ],
        },
        {
          id: 3004,
          title: 'סרום ניאצינאמיד',
          handle: 'niacinamide-serum',
          description: 'סרום לצמצום נקבוביות ושליטה על שומניות העור.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'GlowBeauty',
          type: 'סרום',
          tags: ['עור שומני', 'צמצום נקבוביות'],
          price: 3000,
          price_min: 3000,
          price_max: 3000,
          images: ['/images/skincare/p3-4.webp', '/images/skincare/p3-1.webp'],
          featured_image: '/images/skincare/p3-4.webp',
          url: '/products/niacinamide-serum',
          variants: [
            {
              id: 30041,
              title: 'סרום ניאצינאמיד',
              price: 3000,
              selectedOptions: [{ name: 'Size', value: '30ml' }],
            },
          ],
        },
        {
          id: 3005,
          title: 'סרום פפטידים',
          handle: 'peptide-serum',
          description: 'סרום ממצק עם פפטידים לשיפור גמישות העור.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'GlowBeauty',
          type: 'סרום',
          tags: ['אנטי אייג׳ינג', 'מיצוק'],
          price: 3800,
          price_min: 3800,
          price_max: 3800,
          images: ['/images/skincare/p3-5.webp', '/images/skincare/p3-5-5.webp'],
          featured_image: '/images/skincare/p3-5.webp',
          url: '/products/peptide-serum',
          variants: [
            {
              id: 30051,
              title: 'סרום פפטידים',
              price: 3800,
              selectedOptions: [{ name: 'Size', value: '30ml' }],
            },
          ],
        },
      ],
    },
    {
      id: '4',
      title: 'Sunscreens',
      handle: 'sunscreens',
      description: 'Broad-spectrum sunscreens to protect your skin from harmful UV rays.',
      updatedAt: '2025-05-06T10:00:00-04:00',
      image: '/images/skincare/p2-5.webp',
      url: '/collections/sunscreens',
      products: [
        {
          id: 4001,
          title: 'Clay Mask',
          handle: 'clay-mask',
          description: 'A detoxifying clay mask to purify and refine pores.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'GlowBeauty',
          type: 'Mask',
          tags: ['Oily Skin', 'Detox'],
          price: 2000,
          price_min: 2000,
          price_max: 2000,
          images: ['/images/skincare/face-1.webp', '/images/skincare/face-1-1.webp'],
          featured_image: '/images/skincare/face-1.webp',
          url: '/products/clay-mask',
          variants: [
            {
              id: 40011,
              title: 'Clay Mask',
              price: 2000,
              selectedOptions: [{ name: 'Size', value: '100g' }],
            },
          ],
        },
        {
          id: 4002,
          title: 'Hydrating Sheet Mask',
          handle: 'hydrating-sheet-mask',
          description: 'A soothing sheet mask for instant hydration and glow.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'GlowBeauty',
          type: 'Mask',
          tags: ['Hydrating', 'All Skin Types'],
          price: 800,
          price_min: 800,
          price_max: 800,
          images: ['/images/skincare/face-2.webp', '/images/skincare/face-2-2.webp'],
          featured_image: '/images/skincare/face-2.webp',
          url: '/products/hydrating-sheet-mask',
          variants: [
            {
              id: 40021,
              title: 'Hydrating Sheet Mask',
              price: 800,
              selectedOptions: [{ name: 'Size', value: '1 sheet' }],
            },
          ],
        },
        {
          id: 4003,
          title: 'Exfoliating Mask',
          handle: 'exfoliating-mask',
          description: 'A gentle exfoliating mask to remove dead skin and reveal radiance.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'GlowBeauty',
          type: 'Mask',
          tags: ['Exfoliating', 'Brightening'],
          price: 2500,
          price_min: 2500,
          price_max: 2500,
          images: ['/images/skincare/face-3.webp', '/images/skincare/face-3-3.webp'],
          featured_image: '/images/skincare/face-3.webp',
          url: '/products/exfoliating-mask',
          variants: [
            {
              id: 40031,
              title: 'Exfoliating Mask',
              price: 2500,
              selectedOptions: [{ name: 'Size', value: '100g' }],
            },
          ],
        },
        {
          id: 4004,
          title: 'Charcoal Mask',
          handle: 'charcoal-mask',
          description: 'A deep-cleansing charcoal mask to draw out impurities.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'GlowBeauty',
          type: 'Mask',
          tags: ['Detox', 'Oily Skin'],
          price: 2200,
          price_min: 2200,
          price_max: 2200,
          images: ['/images/skincare/face-4.webp', '/images/skincare/face-2-2.webp'],
          featured_image: '/images/skincare/face-4.webp',
          url: '/products/charcoal-mask',
          variants: [
            {
              id: 40041,
              title: 'Charcoal Mask',
              price: 2200,
              selectedOptions: [{ name: 'Size', value: '100g' }],
            },
          ],
        },
        {
          id: 4005,
          title: 'Overnight Mask',
          handle: 'overnight-mask',
          description: 'A nourishing overnight mask for intense hydration and repair.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'GlowBeauty',
          type: 'Mask',
          tags: ['Hydrating', 'Night'],
          price: 3000,
          price_min: 3000,
          price_max: 3000,
          images: ['/images/skincare/face-5.webp', '/images/skincare/face-3-3.webp'],
          featured_image: '/images/skincare/face-5.webp',
          url: '/products/overnight-mask',
          variants: [
            {
              id: 40051,
              title: 'Overnight Mask',
              price: 3000,
              selectedOptions: [{ name: 'Size', value: '100g' }],
            },
          ],
        },
      ],
    },
    {
      id: '5',
      title: 'Moisturizers',
      handle: 'moisturizers',
      description: 'Hydrating moisturizers to keep your skin soft, smooth, and radiant.',
      updatedAt: '2025-05-06T10:00:00-04:00',
      image: '/images/skincare/c5.webp',
      url: '/collections/moisturizers',
      products: [
        {
          id: 5001,
          title: 'Foaming Facial Cleanser',
          handle: 'foaming-facial-cleanser',
          description: 'A lightweight foam cleanser that deeply cleanses without stripping natural oils.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'GlowBeauty',
          type: 'Cleanser',
          tags: ['Daily', 'All Skin Types'],
          price: 1500,
          price_min: 1500,
          price_max: 1500,
          images: ['/images/skincare/p2-1.webp', '/images/skincare/p2-1-1.webp'],
          featured_image: '/images/skincare/p2-1.webp',
          url: '/products/foaming-facial-cleanser',
          variants: [
            {
              id: 50011,
              title: 'Foaming Facial Cleanser',
              price: 1500,
              selectedOptions: [{ name: 'Size', value: '200ml' }],
            },
          ],
        },
        {
          id: 5002,
          title: 'Gel Cleanser',
          handle: 'gel-cleanser',
          description: 'A refreshing gel cleanser ideal for oily and combination skin types.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'GlowBeauty',
          type: 'Cleanser',
          tags: ['Oily Skin', 'Daily'],
          price: 1800,
          price_min: 1800,
          price_max: 1800,
          images: ['/images/skincare/p2-2.webp', '/images/skincare/p2-2-2.webp'],
          featured_image: '/images/skincare/p2-2.webp',
          url: '/products/gel-cleanser',
          variants: [
            {
              id: 50021,
              title: 'Gel Cleanser',
              price: 1800,
              selectedOptions: [{ name: 'Size', value: '150ml' }],
            },
          ],
        },
        {
          id: 5003,
          title: 'Cream Cleanser',
          handle: 'cream-cleanser',
          description: 'A nourishing cream cleanser that hydrates while cleansing dry skin.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'GlowBeauty',
          type: 'Cleanser',
          tags: ['Dry Skin', 'Hydrating'],
          price: 2000,
          price_min: 2000,
          price_max: 2000,
          images: ['/images/skincare/p2-3.webp', '/images/skincare/p2-3-3.webp'],
          featured_image: '/images/skincare/p2-3.webp',
          url: '/products/cream-cleanser',
          variants: [
            {
              id: 50031,
              title: 'Cream Cleanser',
              price: 2000,
              selectedOptions: [{ name: 'Size', value: '150ml' }],
            },
          ],
        },
        {
          id: 5004,
          title: 'Micellar Water',
          handle: 'micellar-water',
          description: 'A gentle micellar water that removes makeup and impurities effortlessly.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'GlowBeauty',
          type: 'Cleanser',
          tags: ['Makeup Remover', 'Sensitive Skin'],
          price: 1200,
          price_min: 1200,
          price_max: 1200,
          images: ['/images/skincare/p2-4.webp', '/images/skincare/p2-4-4.webp'],
          featured_image: '/images/skincare/p2-4.webp',
          url: '/products/micellar-water',
          variants: [
            {
              id: 50041,
              title: 'Micellar Water',
              price: 1200,
              selectedOptions: [{ name: 'Size', value: '400ml' }],
            },
          ],
        },
        {
          id: 5005,
          title: 'Oil Cleanser',
          handle: 'oil-cleanser',
          description: 'A luxurious oil cleanser that melts away makeup and nourishes the skin.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'GlowBeauty',
          type: 'Cleanser',
          tags: ['Makeup Remover', 'Dry Skin'],
          price: 2500,
          price_min: 2500,
          price_max: 2500,
          images: ['/images/skincare/p2-5.webp', '/images/skincare/p2-5-5.webp'],
          featured_image: '/images/skincare/p2-5.webp',
          url: '/products/oil-cleanser',
          variants: [
            {
              id: 50051,
              title: 'Oil Cleanser',
              price: 2500,
              selectedOptions: [{ name: 'Size', value: '100ml' }],
            },
          ],
        },
      ],
    },
  ]
}
export async function getSkincareGroupCollections() {
  const collections = await getSkincareCollections()
  return [
    {
      id: '1',
      title: 'טיפוח עור',
      handle: 'skincare',
      description: 'גלי את מגוון מוצרי הטיפוח שלנו לכל צרכי היופי שלך.',
      updatedAt: '2025-05-06T10:00:00-04:00',
      url: '/collections/skincare',
      collections,
    },
    {
      id: '2',
      title: 'איפור',
      handle: 'makeup',
      description: 'גלי את קולקציית האיפור שלנו למראה מושלם.',
      updatedAt: '2025-05-06T10:00:00-04:00',
      url: '/collections/makeup',
      collections,
    },
    {
      id: '3',
      title: 'טיפוח שיער',
      handle: 'haircare',
      description: 'טפחי ועצבי את השיער שלך עם מוצרי טיפוח שיער איכותיים.',
      updatedAt: '2025-05-06T10:00:00-04:00',
      url: '/collections/haircare',
      collections,
    },
    {
      id: '4',
      title: 'בישום',
      handle: 'fragrance',
      description: 'מצאי את הניחוח הייחודי שלך עם קולקציית הבשמים שלנו.',
      updatedAt: '2025-05-06T10:00:00-04:00',
      url: '/collections/fragrance',
      collections,
    },
    {
      id: '5',
      title: 'שונות',
      handle: 'tools-accessories',
      description: 'שדרגי את שגרת היופי שלך עם כלים ואביזרים משלימים.',
      updatedAt: '2025-05-06T10:00:00-04:00',
      url: '/collections/tools-accessories',
      collections,
    },
  ]
}

// ------------------------ shoe DATA ------------------------
// ------------------------ shoe DATA ------------------------
export async function getshoeCollections() {
  return [
    {
      id: '1',
      title: 'נעליים בד שיפון',
      handle: 'chiffon-shoes',
      description: 'נעליים בד שיפון נעימות ונוחות לנעילה.',
      updatedAt: '2025-05-06T10:00:00-04:00',
      image: '/images/shoe/c1.webp',
      url: '/collections/chiffon-shoes',
      products: [
        {
          id: 1001,
          title: 'נעל בד שיפון פרימיום',
          handle: 'pastel-chiffon-shoe',
          description: 'נעל בד שיפון פרימיום נעימות ונוחות לנעילה.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'ModestTrend',
          type: 'shoe',
          tags: ['Chiffon', 'Daily'],
          price: 2500,
          price_min: 2500,
          price_max: 2500,
          images: ['/images/shoe/essential-modal-1.webp', '/images/shoe/keffiyeh-modal-1.webp'],
          featured_image: '/images/shoe/essential-modal-1.webp',
          url: '/products/pastel-chiffon-shoe',
          variants: [
            {
              id: 10011,
              title: 'נעל בד שיפון פרימיום',
              price: 2500,
              selectedOptions: [{ name: 'Color', value: 'Blush Pink' }],
            },
          ],
        },
        {
          id: 1002,
          title: 'Embroidered Chiffon shoe',
          handle: 'embroidered-chiffon-shoe',
          description: 'A chiffon shoe with intricate embroidery for special occasions.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'ModestTrend',
          type: 'shoe',
          tags: ['Chiffon', 'Formal'],
          price: 3500,
          price_min: 3500,
          price_max: 3500,
          images: ['/images/shoe/essential-modal-2.webp', '/images/shoe/essential-modal-1-1.webp'],
          featured_image: '/images/shoe/essential-modal-2.webp',
          url: '/products/embroidered-chiffon-shoe',
          variants: [
            {
              id: 10021,
              title: 'Embroidered Chiffon shoe',
              price: 3500,
              selectedOptions: [{ name: 'Color', value: 'Ivory' }],
            },
          ],
        },
        {
          id: 1003,
          title: 'Bold Chiffon shoe',
          handle: 'bold-chiffon-shoe',
          description: 'A vibrant chiffon shoe for a striking and confident look.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'ModestTrend',
          type: 'shoe',
          tags: ['Chiffon', 'Statement'],
          price: 2800,
          price_min: 2800,
          price_max: 2800,
          images: ['/images/shoe/essential-modal-3.webp', '/images/shoe/shoe-haze-1.webp'],
          featured_image: '/images/shoe/essential-modal-3.webp',
          url: '/products/bold-chiffon-shoe',
          variants: [
            {
              id: 10031,
              title: 'Bold Chiffon shoe',
              price: 2800,
              selectedOptions: [{ name: 'Color', value: 'Emerald Green' }],
            },
          ],
        },
        {
          id: 1004,
          title: 'Printed Chiffon shoe',
          handle: 'printed-chiffon-shoe',
          description: 'A chic printed chiffon shoe for a modern and stylish appearance.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'ModestTrend',
          type: 'shoe',
          tags: ['Chiffon', 'Printed'],
          price: 3000,
          price_min: 3000,
          price_max: 3000,
          images: ['/images/shoe/keffiyeh-modal-1.webp', '/images/shoe/essential-modal-1.webp'],
          featured_image: '/images/shoe/keffiyeh-modal-1.webp',
          url: '/products/printed-chiffon-shoe',
          variants: [
            {
              id: 10041,
              title: 'Printed Chiffon shoe',
              price: 3000,
              selectedOptions: [{ name: 'Color', value: 'Floral Blue' }],
            },
          ],
        },
        {
          id: 1005,
          title: 'Neutral Chiffon shoe',
          handle: 'neutral-chiffon-shoe',
          description: 'A versatile neutral chiffon shoe for effortless styling.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'ModestTrend',
          type: 'shoe',
          tags: ['Chiffon', 'Daily'],
          price: 2200,
          price_min: 2200,
          price_max: 2200,
          images: ['/images/shoe/shoe-white-1.webp', '/images/shoe/premium-rayon-1.webp'],
          featured_image: '/images/shoe/shoe-white-1.webp',
          url: '/products/neutral-chiffon-shoe',
          variants: [
            {
              id: 10051,
              title: 'Neutral Chiffon shoe',
              price: 2200,
              selectedOptions: [{ name: 'Color', value: 'Beige' }],
            },
          ],
        },
      ],
    },
    {
      id: '2',
      title: 'Jersey shoes',
      handle: 'jersey-shoes',
      description: 'Soft and stretchy jersey shoes for comfort and versatility.',
      updatedAt: '2025-05-06T10:00:00-04:00',
      image: '/images/shoe/c2.webp',
      url: '/collections/jersey-shoes',
      products: [
        {
          id: 2001,
          title: 'Classic Jersey shoe',
          handle: 'classic-jersey-shoe',
          description: 'A classic jersey shoe for all-day comfort and easy styling.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'ModestTrend',
          type: 'shoe',
          tags: ['Jersey', 'Daily'],
          price: 1800,
          price_min: 1800,
          price_max: 1800,
          images: ['/images/shoe/printed-modal-2.webp', '/images/shoe/printed-modal-2.png'],
          featured_image: '/images/shoe/printed-modal-2.webp',
          url: '/products/classic-jersey-shoe',
          variants: [
            {
              id: 20011,
              title: 'Classic Jersey shoe',
              price: 1800,
              selectedOptions: [{ name: 'Color', value: 'Black' }],
            },
          ],
        },
        {
          id: 2002,
          title: 'Premium Jersey shoe',
          handle: 'classic-jersey-shoe',
          description: 'A premium jersey shoe with a smooth, luxurious feel.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'ModestTrend',
          type: 'shoe',
          tags: ['Jersey', 'Premium'],
          price: 2500,
          price_min: 2500,
          price_max: 2500,
          images: ['/images/shoe/shoe-coral-2.webp', '/images/shoe/shoe-coral-1.webp'],
          featured_image: '/images/shoe/shoe-coral-1.webp',
          url: '/products/premium-jersey-shoe',
          variants: [
            {
              id: 20021,
              title: 'Premium Jersey shoe',
              price: 2500,
              selectedOptions: [{ name: 'Color', value: 'Navy' }],
            },
          ],
        },
        {
          id: 2003,
          title: 'Sport Jersey shoe',
          handle: 'sport-jersey-shoe',
          description: 'A breathable jersey shoe designed for active lifestyles.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'ModestTrend',
          type: 'shoe',
          tags: ['Jersey', 'Sport'],
          price: 2000,
          price_min: 2000,
          price_max: 2000,
          images: ['/images/shoe/shoe-mosaic-1.webp', '/images/shoe/shoe-mosaic-2.webp'],
          featured_image: '/images/shoe/shoe-mosaic-1.webp',
          url: '/products/sport-jersey-shoe',
          variants: [
            {
              id: 20031,
              title: 'Sport Jersey shoe',
              price: 2000,
              selectedOptions: [{ name: 'Color', value: 'Grey' }],
            },
          ],
        },
        {
          id: 2004,
          title: 'Patterned Jersey shoe',
          handle: 'patterned-jersey-shoe',
          description: 'A stylish patterned jersey shoe for a trendy look.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'ModestTrend',
          type: 'shoe',
          tags: ['Jersey', 'Patterned'],
          price: 2200,
          price_min: 2200,
          price_max: 2200,
          images: ['/images/shoe/shoe-white-2.webp', '/images/shoe/shoe-white-1.webp'],
          featured_image: '/images/shoe/shoe-white-1.webp',
          url: '/products/patterned-jersey-shoe',
          variants: [
            {
              id: 20041,
              title: 'Patterned Jersey shoe',
              price: 2200,
              selectedOptions: [{ name: 'Color', value: 'Geometric Blue' }],
            },
          ],
        },
        {
          id: 2005,
          title: 'Soft Jersey shoe',
          handle: 'soft-jersey-shoe',
          description: 'An ultra-soft jersey shoe for maximum comfort and versatility.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'ModestTrend',
          type: 'shoe',
          tags: ['Jersey', 'Daily'],
          price: 1900,
          price_min: 1900,
          price_max: 1900,
          images: ['/images/shoe/shoe-yellow-2.webp', '/images/shoe/shoe-yellow-1.webp'],
          featured_image: '/images/shoe/shoe-yellow-2.webp',
          url: '/products/soft-jersey-shoe',
          variants: [
            {
              id: 20051,
              title: 'Soft Jersey shoe',
              price: 1900,
              selectedOptions: [{ name: 'Color', value: 'Cream' }],
            },
          ],
        },
      ],
    },
    {
      id: '3',
      title: 'Cotton shoes',
      handle: 'cotton-shoes',
      description: 'Breathable and durable cotton shoes for everyday wear.',
      updatedAt: '2025-05-06T10:00:00-04:00',
      image: '/images/shoe/c3.webp',
      url: '/collections/cotton-shoes',
      products: [
        {
          id: 3005,
          title: 'נעל כותנה בצבע אחיד',
          handle: 'solid-cotton-shoe',
          description: 'נעל כותנה בצבע אחיד לעיצוב קלאסי ועל-זמני.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'ModestTrend',
          type: 'נעל',
          tags: ['כותנה', 'יומיומי'],
          price: 1700,
          price_min: 1700,
          price_max: 1700,
          images: ['/images/shoe/premium-rayon-2.webp', '/images/shoe/printed-modal-5.webp'],
          featured_image: '/images/shoe/premium-rayon-2.webp',
          url: '/products/solid-cotton-shoe',
          variants: [
            {
              id: 30051,
              title: 'נעל כותנה בצבע אחיד',
              price: 1700,
              selectedOptions: [{ name: 'Color', value: 'Charcoal' }],
            },
          ],
        },
        {
          id: 3002,
          title: 'נעל כותנה בטקסטורה',
          handle: 'classic-jersey-shoe',
          description: 'נעל כותנה עם טקסטורה למראה ייחודי וסטייליסטי.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'ModestTrend',
          type: 'נעל',
          tags: ['כותנה', 'מרקם'],
          price: 2000,
          price_min: 2000,
          price_max: 2000,
          images: ['/images/shoe/rayon-shoe.webp', '/images/shoe/zahraa_3.webp'],
          featured_image: '/images/shoe/zahraa_3.webp',
          url: '/products/textured-cotton-shoe',
          variants: [
            {
              id: 30021,
              title: 'נעל כותנה בטקסטורה',
              price: 2000,
              selectedOptions: [{ name: 'Color', value: 'Taupe' }],
            },
          ],
        },
        {
          id: 3003,
          title: 'נעל כותנה עם הדפס',
          handle: 'classic-jersey-shoe',
          description: 'נעל כותנה עם הדפס צבעוני לסגנון שובב ומודרני.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'ModestTrend',
          type: 'נעל',
          tags: ['כותנה', 'מודפס'],
          price: 1800,
          price_min: 1800,
          price_max: 1800,
          images: ['/images/shoe/printed-modal-3.webp', '/images/shoe/printed-modal-4.webp'],
          featured_image: '/images/shoe/printed-modal-3.webp',
          url: '/products/printed-cotton-hACON',
          variants: [
            {
              id: 30031,
              title: 'נעל כותנה עם הדפס',
              price: 1800,
              selectedOptions: [{ name: 'Color', value: 'Floral Red' }],
            },
          ],
        },
        {
          id: 3004,
          title: 'נעל כותנה אורגנית',
          handle: 'organic-cotton-shoe',
          description: 'נעל כותנה אורגנית ידידותי לסביבה לאופנה בת-קיימא.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'ModestTrend',
          type: 'נעל',
          tags: ['כותנה', 'אורגני'],
          price: 2300,
          price_min: 2300,
          price_max: 2300,
          images: ['/images/shoe/shoe-mosaic-1.webp', '/images/shoe/shoe-mosaic-2.webp'],
          featured_image: '/images/shoe/shoe-mosaic-1.webp',
          url: '/products/organic-cotton-shoe',
          variants: [
            {
              id: 30041,
              title: 'נעל כותנה אורגנית',
              price: 2300,
              selectedOptions: [{ name: 'Color', value: 'Sage Green' }],
            },
          ],
        },
        {
          id: 3001,
          title: 'נעל כותנה בסיסי',
          handle: 'basic-cotton-shoe',
          description: 'נעל כותנה פשוט ללבישה יומיומית נוחה.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'ModestTrend',
          type: 'נעל',
          tags: ['כותנה', 'יומיומי'],
          price: 1500,
          price_min: 1500,
          price_max: 1500,
          images: ['/images/shoe/zahraa_2.webp', '/images/shoe/zahraa_1.webp'],
          featured_image: '/images/shoe/zahraa_2.webp',
          url: '/products/basic-cotton-shoe',
          variants: [
            {
              id: 30011,
              title: 'נעל כותנה בסיסי',
              price: 1500,
              selectedOptions: [{ name: 'Color', value: 'White' }],
            },
          ],
        },
      ],
    },
    {
      id: '4',
      title: 'Silk shoes',
      handle: 'silk-shoes',
      description: 'Luxurious silk shoes for a smooth and sophisticated look.',
      updatedAt: '2025-05-06T10:00:00-04:00',
      image: '/images/shoe/c4.webp',
      url: '/collections/silk-shoes',
      products: [
        {
          id: 4001,
          title: 'Classic Jersey shoe',
          handle: 'classic-jersey-shoe',
          description: 'A classic jersey shoe for all-day comfort and easy styling.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'ModestTrend',
          type: 'shoe',
          tags: ['Jersey', 'Daily'],
          price: 1800,
          price_min: 1800,
          price_max: 1800,
          images: ['/images/shoe/printed-modal-2.webp', '/images/shoe/printed-modal-2.png'],
          featured_image: '/images/shoe/printed-modal-2.webp',
          url: '/products/classic-jersey-shoe',
          variants: [
            {
              id: 40011,
              title: 'Classic Jersey shoe',
              price: 1800,
              selectedOptions: [{ name: 'Color', value: 'Black' }],
            },
          ],
        },
        {
          id: 4002,
          title: 'Premium Jersey shoe',
          handle: 'heledoron-shoe',
          description: 'A premium jersey shoe with a smooth, luxurious feel.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'ModestTrend',
          type: 'shoe',
          tags: ['Jersey', 'Premium'],
          price: 2500,
          price_min: 2500,
          price_max: 2500,
          images: ['/images/shoe/shoe-coral-2.webp', '/images/shoe/shoe-coral-1.webp'],
          featured_image: '/images/shoe/shoe-coral-1.webp',
          url: '/products/premium-jersey-shoe',
          variants: [
            {
              id: 40021,
              title: 'Premium Jersey shoe',
              price: 2500,
              selectedOptions: [{ name: 'Color', value: 'Navy' }],
            },
          ],
        },
        {
          id: 4003,
          title: 'Sport Jersey shoe',
          handle: 'classic-jersey-shoe',
          description: 'A breathable jersey shoe designed for active lifestyles.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'ModestTrend',
          type: 'shoe',
          tags: ['Jersey', 'Sport'],
          price: 2000,
          price_min: 2000,
          price_max: 2000,
          images: ['/images/shoe/shoe-mosaic-1.webp', '/images/shoe/shoe-mosaic-2.webp'],
          featured_image: '/images/shoe/shoe-mosaic-1.webp',
          url: '/products/sport-jersey-shoe',
          variants: [
            {
              id: 40031,
              title: 'Sport Jersey shoe',
              price: 2000,
              selectedOptions: [{ name: 'Color', value: 'Grey' }],
            },
          ],
        },
        {
          id: 4004,
          title: 'Patterned Jersey shoe',
          handle: 'patterned-jersey-shoe',
          description: 'A stylish patterned jersey shoe for a trendy look.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'ModestTrend',
          type: 'shoe',
          tags: ['Jersey', 'Patterned'],
          price: 2200,
          price_min: 2200,
          price_max: 2200,
          images: ['/images/shoe/shoe-white-2.webp', '/images/shoe/shoe-white-1.webp'],
          featured_image: '/images/shoe/shoe-white-1.webp',
          url: '/products/patterned-jersey-shoe',
          variants: [
            {
              id: 40041,
              title: 'Patterned Jersey shoe',
              price: 2200,
              selectedOptions: [{ name: 'Color', value: 'Geometric Blue' }],
            },
          ],
        },
        {
          id: 4005,
          title: 'Soft Jersey shoe',
          handle: 'soft-jersey-shoe',
          description: 'An ultra-soft jersey shoe for maximum comfort and versatility.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'ModestTrend',
          type: 'shoe',
          tags: ['Jersey', 'Daily'],
          price: 1900,
          price_min: 1900,
          price_max: 1900,
          images: ['/images/shoe/shoe-yellow-2.webp', '/images/shoe/shoe-yellow-1.webp'],
          featured_image: '/images/shoe/shoe-yellow-2.webp',
          url: '/products/soft-jersey-shoe',
          variants: [
            {
              id: 40051,
              title: 'Soft Jersey shoe',
              price: 1900,
              selectedOptions: [{ name: 'Color', value: 'Cream' }],
            },
          ],
        },
      ],
    },
    {
      id: '5',
      title: 'Instant shoes',
      handle: 'instant-shoes',
      description: 'Convenient and ready-to-wear instant shoes for quick, stylish coverage.',
      updatedAt: '2025-05-06T10:00:00-04:00',
      image: '/images/shoe/c5.webp',
      url: '/collections/instant-shoes',
      products: [
        {
          id: 5001,
          title: 'Pastel Chiffon shoe',
          handle: 'classic-jersey-shoe',
          description: 'A delicate pastel chiffon shoe, perfect for everyday elegance.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'ModestTrend',
          type: 'shoe',
          tags: ['Chiffon', 'Daily'],
          price: 2500,
          price_min: 2500,
          price_max: 2500,
          images: ['/images/shoe/essential-modal-1.webp', '/images/shoe/keffiyeh-modal-1.webp'],
          featured_image: '/images/shoe/essential-modal-1.webp',
          url: '/products/pastel-chiffon-shoe',
          variants: [
            {
              id: 50011,
              title: 'Pastel Chiffon shoe',
              price: 2500,
              selectedOptions: [{ name: 'Color', value: 'Blush Pink' }],
            },
          ],
        },
        {
          id: 5002,
          title: 'Embroidered Chiffon shoe',
          handle: 'embroidered-chiffon-shoe',
          description: 'A chiffon shoe with intricate embroidery for special occasions.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'ModestTrend',
          type: 'shoe',
          tags: ['Chiffon', 'Formal'],
          price: 3500,
          price_min: 3500,
          price_max: 3500,
          images: ['/images/shoe/essential-modal-2.webp', '/images/shoe/essential-modal-1-1.webp'],
          featured_image: '/images/shoe/essential-modal-2.webp',
          url: '/products/embroidered-chiffon-shoe',
          variants: [
            {
              id: 50021,
              title: 'Embroidered Chiffon shoe',
              price: 3500,
              selectedOptions: [{ name: 'Color', value: 'Ivory' }],
            },
          ],
        },
        {
          id: 5003,
          title: 'Bold Chiffon shoe',
          handle: 'classic-jersey-shoe',
          description: 'A vibrant chiffon shoe for a striking and confident look.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'ModestTrend',
          type: 'shoe',
          tags: ['Chiffon', 'Statement'],
          price: 2800,
          price_min: 2800,
          price_max: 2800,
          images: ['/images/shoe/essential-modal-3.webp', '/images/shoe/shoe-haze-1.webp'],
          featured_image: '/images/shoe/essential-modal-3.webp',
          url: '/products/bold-chiffon-shoe',
          variants: [
            {
              id: 50031,
              title: 'Bold Chiffon shoe',
              price: 2800,
              selectedOptions: [{ name: 'Color', value: 'Emerald Green' }],
            },
          ],
        },
        {
          id: 5004,
          title: 'Printed Chiffon shoe',
          handle: 'printed-chiffon-shoe',
          description: 'A chic printed chiffon shoe for a modern and stylish appearance.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'ModestTrend',
          type: 'shoe',
          tags: ['Chiffon', 'Printed'],
          price: 3000,
          price_min: 3000,
          price_max: 3000,
          images: ['/images/shoe/keffiyeh-modal-1.webp', '/images/shoe/essential-modal-1.webp'],
          featured_image: '/images/shoe/keffiyeh-modal-1.webp',
          url: '/products/printed-chiffon-shoe',
          variants: [
            {
              id: 50041,
              title: 'Printed Chiffon shoe',
              price: 3000,
              selectedOptions: [{ name: 'Color', value: 'Floral Blue' }],
            },
          ],
        },
        {
          id: 5005,
          title: 'Neutral Chiffon shoe',
          handle: 'neutral-chiffon-shoe',
          description: 'A versatile neutral chiffon shoe for effortless styling.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'ModestTrend',
          type: 'shoe',
          tags: ['Chiffon', 'Daily'],
          price: 2200,
          price_min: 2200,
          price_max: 2200,
          images: ['/images/shoe/shoe-white-1.webp', '/images/shoe/premium-rayon-1.webp'],
          featured_image: '/images/shoe/shoe-white-1.webp',
          url: '/products/neutral-chiffon-shoe',
          variants: [
            {
              id: 50051,
              title: 'Neutral Chiffon shoe',
              price: 2200,
              selectedOptions: [{ name: 'Color', value: 'Beige' }],
            },
          ],
        },
      ],
    },
  ]
}
export async function getshoeGroupCollections() {
  const collections = await getshoeCollections()
  return [
    {
      title: 'Spring Arrivals',
      handle: 'spring-arrivals',
      description: 'lorem ipsum',
      collections,
    },
    {
      title: 'NEW ARRIVALS',
      handle: 'new-arrivals',
      description: 'lorem ipsum',
      collections,
    },
    {
      title: 'Best Selling',
      handle: 'best-selling',
      description: 'lorem ipsum',
      collections,
    },
    {
      title: 'shoes',
      handle: 'shoes',
      description: 'lorem ipsum',
      collections,
    },
    {
      title: 'Accessories',
      handle: 'accessories',
      description: 'lorem ipsum',
      collections,
    },
  ]
}

// ------------------------ FASHION DATA ------------------------
// ------------------------ FASHION DATA ------------------------
export async function getFashionCollections() {
  return [
    {
      id: '1',
      title: 'Jackets',
      handle: 'jackets',
      description:
        'Stylish jackets for every occasion, from casual to formal. Explore our collection of trendy jackets that elevate your outfit.',
      updatedAt: '2025-05-06T10:00:00-04:00',
      image: '/images/fashion/jacket.jpg',
      url: '/collections/jackets',
      products: [
        {
          id: 1001,
          title: 'Leather Tote Bag',
          handle: 'leather-tote-bag',
          description: 'A luxurious leather tote bag, perfect for daily sophistication.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'LuxCouture',
          type: 'Handbag',
          tags: ['Leather', 'Daily'],
          price: 85000,
          price_min: 85000,
          price_max: 85000,
          images: ['/images/fashion/p1.jpg'],
          featured_image: '/images/fashion/p1.jpg',
          url: '/products/leather-tote-bag',
          variants: [
            {
              id: 10011,
              title: 'Leather Tote Bag',
              price: 85000,
              selectedOptions: [
                { name: 'Color', value: 'Black' },
                {
                  name: 'Size',
                  value: 'Large',
                },
              ],
            },
          ],
        },
        {
          id: 1002,
          title: 'Suede Clutch',
          handle: 'suede-clutch',
          description: 'A sleek suede clutch for evening glamour and refined style.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'LuxCouture',
          type: 'Handbag',
          tags: ['Suede', 'Evening'],
          price: 65000,
          price_min: 65000,
          price_max: 65000,
          images: ['/images/fashion/p2.jpg'],
          featured_image: '/images/fashion/p2.jpg',
          url: '/products/suede-clutch',
          variants: [
            {
              id: 10021,
              title: 'Suede Clutch',
              price: 65000,
              selectedOptions: [{ name: 'Color', value: 'Navy' }],
            },
          ],
        },
        {
          id: 1003,
          title: 'Satchel Bag',
          handle: 'satchel-bag',
          description: 'A structured satchel bag with gold-tone hardware for a chic look.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'LuxCouture',
          type: 'Handbag',
          tags: ['Leather', 'Formal'],
          price: 95000,
          price_min: 95000,
          price_max: 95000,
          images: ['/images/fashion/p3.jpg'],
          featured_image: '/images/fashion/p3.jpg',
          url: '/products/satchel-bag',
          variants: [
            {
              id: 10031,
              title: 'Satchel Bag',
              price: 95000,
              selectedOptions: [{ name: 'Color', value: 'Burgundy' }],
            },
          ],
        },
        {
          id: 1004,
          title: 'Mini Crossbody Bag',
          handle: 'mini-crossbody-bag',
          description: 'A compact crossbody bag for effortless style on the go.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'LuxCouture',
          type: 'Handbag',
          tags: ['Leather', 'Casual'],
          price: 55000,
          price_min: 55000,
          price_max: 55000,
          images: ['/images/fashion/p4.jpg'],
          featured_image: '/images/fashion/p4.jpg',
          url: '/products/mini-crossbody-bag',
          variants: [
            {
              id: 10041,
              title: 'Mini Crossbody Bag',
              price: 55000,
              selectedOptions: [{ name: 'Color', value: 'Cream' }],
            },
          ],
        },
        {
          id: 1005,
          title: 'Embossed Shoulder Bag',
          handle: 'embossed-shoulder-bag',
          description: 'A statement shoulder bag with embossed detailing for bold elegance.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'LuxCouture',
          type: 'Handbag',
          tags: ['Leather', 'Statement'],
          price: 105000,
          price_min: 105000,
          price_max: 105000,
          images: ['/images/fashion/p5.jpg'],
          featured_image: '/images/fashion/p5.jpg',
          url: '/products/embossed-shoulder-bag',
          variants: [
            {
              id: 10051,
              title: 'Embossed Shoulder Bag',
              price: 105000,
              selectedOptions: [{ name: 'Color', value: 'Black' }],
            },
          ],
        },
      ],
    },
    {
      id: '2',
      title: 'T-Shirts',
      handle: 't-shirts',
      description: 'Casual t-shirts for everyday wear, combining comfort and style effortlessly. Find your fit.',
      updatedAt: '2025-05-06T10:00:00-04:00',
      image: '/images/fashion/tshirt.jpg',
      url: '/collections/t-shirts',
      products: [
        {
          id: 2001,
          title: 'Silk Evening Gown',
          handle: 'silk-evening-gown',
          description: 'A flowing silk gown for glamorous evenings and special occasions.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'LuxCouture',
          type: 'Dress',
          tags: ['Silk', 'Evening'],
          price: 250000,
          price_min: 250000,
          price_max: 250000,
          images: ['/images/fashion/p5.jpg'],
          featured_image: '/images/fashion/p5.jpg',
          url: '/products/silk-evening-gown',
          variants: [
            {
              id: 20011,
              title: 'Silk Evening Gown',
              price: 250000,
              selectedOptions: [{ name: 'Size', value: 'M' }],
            },
          ],
        },
        {
          id: 2002,
          title: 'Velvet Cocktail Dress',
          handle: 'velvet-cocktail-dress',
          description: 'A luxurious velvet dress for chic cocktail parties.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'LuxCouture',
          type: 'Dress',
          tags: ['Velvet', 'Cocktail'],
          price: 180000,
          price_min: 180000,
          price_max: 180000,
          images: ['/images/fashion/p2.jpg'],
          featured_image: '/images/fashion/p2.jpg',
          url: '/products/velvet-cocktail-dress',
          variants: [
            {
              id: 20021,
              title: 'Velvet Cocktail Dress',
              price: 180000,
              selectedOptions: [{ name: 'Size', value: 'S' }],
            },
          ],
        },
        {
          id: 2003,
          title: 'Embroidered Midi Dress',
          handle: 'embroidered-midi-dress',
          description: 'An intricately embroidered midi dress for elegant day-to-night looks.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'LuxCouture',
          type: 'Dress',
          tags: ['Embroidered', 'Day-to-Night'],
          price: 220000,
          price_min: 220000,
          price_max: 220000,
          images: ['/images/fashion/p7.jpg'],
          featured_image: '/images/fashion/p7.jpg',
          url: '/products/embroidered-midi-dress',
          variants: [
            {
              id: 20031,
              title: 'Embroidered Midi Dress',
              price: 220000,
              selectedOptions: [{ name: 'Size', value: 'M' }],
            },
          ],
        },
        {
          id: 2004,
          title: 'Satin Wrap Dress',
          handle: 'satin-wrap-dress',
          description: 'A sleek satin wrap dress for effortless luxury and comfort.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'LuxCouture',
          type: 'Dress',
          tags: ['Satin', 'Casual'],
          price: 150000,
          price_min: 150000,
          price_max: 150000,
          images: ['/images/fashion/p8.jpg'],
          featured_image: '/images/fashion/p8.jpg',
          url: '/products/satin-wrap-dress',
          variants: [
            {
              id: 20041,
              title: 'Satin Wrap Dress',
              price: 150000,
              selectedOptions: [{ name: 'Size', value: 'L' }],
            },
          ],
        },
        {
          id: 2005,
          title: 'Sequin Party Dress',
          handle: 'sequin-party-dress',
          description: 'A dazzling sequin dress to shine at any high-profile event.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'LuxCouture',
          type: 'Dress',
          tags: ['Sequin', 'Party'],
          price: 300000,
          price_min: 300000,
          price_max: 300000,
          images: ['/images/fashion/p2.jpg'],
          featured_image: '/images/fashion/p2.jpg',
          url: '/products/sequin-party-dress',
          variants: [
            {
              id: 20051,
              title: 'Sequin Party Dress',
              price: 300000,
              selectedOptions: [{ name: 'Size', value: 'S' }],
            },
          ],
        },
      ],
    },
    {
      id: '3',
      title: 'Jeans',
      handle: 'jeans',
      description: 'Trendy jeans for a casual yet stylish look. Perfect for any occasion. Find your fit.',
      updatedAt: '2025-05-06T10:00:00-04:00',
      image: '/images/fashion/jean.jpg',
      url: '/collections/jeans',
      products: [
        {
          id: 3001,
          title: 'Diamond Necklace',
          handle: 'diamond-necklace',
          description: 'A stunning diamond necklace for timeless elegance.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'LuxCouture',
          type: 'Jewelry',
          tags: ['Diamond', 'Evening'],
          price: 500000,
          price_min: 500000,
          price_max: 500000,
          images: ['/images/fashion/kid-1.jpg'],
          featured_image: '/images/fashion/kid-1.jpg',
          url: '/products/diamond-necklace',
          variants: [
            {
              id: 30011,
              title: 'Diamond Necklace',
              price: 500000,
              selectedOptions: [{ name: 'Color', value: 'White Gold' }],
            },
          ],
        },
        {
          id: 3002,
          title: 'Emerald Earrings',
          handle: 'emerald-earrings',
          description: 'Vibrant emerald earrings for a bold and luxurious statement.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'LuxCouture',
          type: 'Jewelry',
          tags: ['Emerald', 'Statement'],
          price: 350000,
          price_min: 350000,
          price_max: 350000,
          images: ['/images/fashion/kid-2.jpg'],
          featured_image: '/images/fashion/kid-2.jpg',
          url: '/products/emerald-earrings',
          variants: [
            {
              id: 30021,
              title: 'Emerald Earrings',
              price: 350000,
              selectedOptions: [{ name: 'Color', value: 'Yellow Gold' }],
            },
          ],
        },
        {
          id: 3003,
          title: 'Sapphire Bracelet',
          handle: 'sapphire-bracelet',
          description: 'A delicate sapphire bracelet for refined elegance.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'LuxCouture',
          type: 'Jewelry',
          tags: ['Sapphire', 'Daily'],
          price: 400000,
          price_min: 400000,
          price_max: 400000,
          images: ['/images/fashion/kid-3.jpg'],
          featured_image: '/images/fashion/kid-3.jpg',
          url: '/products/sapphire-bracelet',
          variants: [
            {
              id: 30031,
              title: 'Sapphire Bracelet',
              price: 400000,
              selectedOptions: [{ name: 'Color', value: 'White Gold' }],
            },
          ],
        },
        {
          id: 3004,
          title: 'Pearl Ring',
          handle: 'pearl-ring',
          description: 'A classic pearl ring for understated luxury.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'LuxCouture',
          type: 'Jewelry',
          tags: ['Pearl', 'Classic'],
          price: 200000,
          price_min: 200000,
          price_max: 200000,
          images: ['/images/fashion/kid-4.jpg'],
          featured_image: '/images/fashion/kid-4.jpg',
          url: '/products/pearl-ring',
          variants: [
            {
              id: 30041,
              title: 'Pearl Ring',
              price: 200000,
              selectedOptions: [{ name: 'Color', value: 'Rose Gold' }],
            },
          ],
        },
        {
          id: 3005,
          title: 'Gold Choker',
          handle: 'gold-choker',
          description: 'A sleek gold choker for modern sophistication.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'LuxCouture',
          type: 'Jewelry',
          tags: ['Gold', 'Modern'],
          price: 300000,
          price_min: 300000,
          price_max: 300000,
          images: ['/images/fashion/kid-5.jpg'],
          featured_image: '/images/fashion/kid-5.jpg',
          url: '/products/gold-choker',
          variants: [
            {
              id: 30051,
              title: 'Gold Choker',
              price: 300000,
              selectedOptions: [{ name: 'Color', value: 'Yellow Gold' }],
            },
          ],
        },
      ],
    },
    {
      id: '4',
      title: 'Coats',
      handle: 'coats',
      description: 'Elegant coats for every season, combining warmth and style. Find your perfect outerwear.',
      updatedAt: '2025-05-06T10:00:00-04:00',
      image: '/images/fashion/coat.jpg',
      url: '/collections/coats',
      products: [
        {
          id: 4001,
          title: 'Silk Evening Gown',
          handle: 'silk-evening-gown',
          description: 'A flowing silk gown for glamorous evenings and special occasions.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'LuxCouture',
          type: 'Dress',
          tags: ['Silk', 'Evening'],
          price: 250000,
          price_min: 250000,
          price_max: 250000,
          images: ['/images/fashion/p5.jpg'],
          featured_image: '/images/fashion/p5.jpg',
          url: '/products/silk-evening-gown',
          variants: [
            {
              id: 40011,
              title: 'Silk Evening Gown',
              price: 250000,
              selectedOptions: [{ name: 'Size', value: 'M' }],
            },
          ],
        },
        {
          id: 4002,
          title: 'Velvet Cocktail Dress',
          handle: 'velvet-cocktail-dress',
          description: 'A luxurious velvet dress for chic cocktail parties.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'LuxCouture',
          type: 'Dress',
          tags: ['Velvet', 'Cocktail'],
          price: 180000,
          price_min: 180000,
          price_max: 180000,
          images: ['/images/fashion/p2.jpg'],
          featured_image: '/images/fashion/p2.jpg',
          url: '/products/velvet-cocktail-dress',
          variants: [
            {
              id: 40021,
              title: 'Velvet Cocktail Dress',
              price: 180000,
              selectedOptions: [{ name: 'Size', value: 'S' }],
            },
          ],
        },
        {
          id: 4003,
          title: 'Embroidered Midi Dress',
          handle: 'embroidered-midi-dress',
          description: 'An intricately embroidered midi dress for elegant day-to-night looks.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'LuxCouture',
          type: 'Dress',
          tags: ['Embroidered', 'Day-to-Night'],
          price: 220000,
          price_min: 220000,
          price_max: 220000,
          images: ['/images/fashion/p7.jpg'],
          featured_image: '/images/fashion/p7.jpg',
          url: '/products/embroidered-midi-dress',
          variants: [
            {
              id: 40031,
              title: 'Embroidered Midi Dress',
              price: 220000,
              selectedOptions: [{ name: 'Size', value: 'M' }],
            },
          ],
        },
        {
          id: 4004,
          title: 'Satin Wrap Dress',
          handle: 'satin-wrap-dress',
          description: 'A sleek satin wrap dress for effortless luxury and comfort.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'LuxCouture',
          type: 'Dress',
          tags: ['Satin', 'Casual'],
          price: 150000,
          price_min: 150000,
          price_max: 150000,
          images: ['/images/fashion/p8.jpg'],
          featured_image: '/images/fashion/p8.jpg',
          url: '/products/satin-wrap-dress',
          variants: [
            {
              id: 40041,
              title: 'Satin Wrap Dress',
              price: 150000,
              selectedOptions: [{ name: 'Size', value: 'L' }],
            },
          ],
        },
        {
          id: 4005,
          title: 'Sequin Party Dress',
          handle: 'sequin-party-dress',
          description: 'A dazzling sequin dress to shine at any high-profile event.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'LuxCouture',
          type: 'Dress',
          tags: ['Sequin', 'Party'],
          price: 300000,
          price_min: 300000,
          price_max: 300000,
          images: ['/images/fashion/p2.jpg'],
          featured_image: '/images/fashion/p2.jpg',
          url: '/products/sequin-party-dress',
          variants: [
            {
              id: 40051,
              title: 'Sequin Party Dress',
              price: 300000,
              selectedOptions: [{ name: 'Size', value: 'S' }],
            },
          ],
        },
      ],
    },
    {
      id: '5',
      title: 'Shoes',
      handle: 'shoes',
      description: 'Trendy shoes for every occasion, from casual to formal. Find your perfect pair.',
      updatedAt: '2025-05-06T10:00:00-04:00',
      image: '/images/fashion/shoes.jpg',
      url: '/collections/shoes',
      products: [
        {
          id: 5001,
          title: 'Leather Tote Bag',
          handle: 'leather-tote-bag',
          description: 'A luxurious leather tote bag, perfect for daily sophistication.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'LuxCouture',
          type: 'Handbag',
          tags: ['Leather', 'Daily'],
          price: 85000,
          price_min: 85000,
          price_max: 85000,
          images: ['/images/fashion/p1.jpg'],
          featured_image: '/images/fashion/p1.jpg',
          url: '/products/leather-tote-bag',
          variants: [
            {
              id: 50011,
              title: 'Leather Tote Bag',
              price: 85000,
              selectedOptions: [{ name: 'Color', value: 'Black' }],
            },
          ],
        },
        {
          id: 5002,
          title: 'Suede Clutch',
          handle: 'suede-clutch',
          description: 'A sleek suede clutch for evening glamour and refined style.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'LuxCouture',
          type: 'Handbag',
          tags: ['Suede', 'Evening'],
          price: 65000,
          price_min: 65000,
          price_max: 65000,
          images: ['/images/fashion/p2.jpg'],
          featured_image: '/images/fashion/p2.jpg',
          url: '/products/suede-clutch',
          variants: [
            {
              id: 50021,
              title: 'Suede Clutch',
              price: 65000,
              selectedOptions: [{ name: 'Color', value: 'Navy' }],
            },
          ],
        },
        {
          id: 5003,
          title: 'Satchel Bag',
          handle: 'satchel-bag',
          description: 'A structured satchel bag with gold-tone hardware for a chic look.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'LuxCouture',
          type: 'Handbag',
          tags: ['Leather', 'Formal'],
          price: 95000,
          price_min: 95000,
          price_max: 95000,
          images: ['/images/fashion/p3.jpg'],
          featured_image: '/images/fashion/p3.jpg',
          url: '/products/satchel-bag',
          variants: [
            {
              id: 50031,
              title: 'Satchel Bag',
              price: 95000,
              selectedOptions: [{ name: 'Color', value: 'Burgundy' }],
            },
          ],
        },
        {
          id: 5004,
          title: 'Mini Crossbody Bag',
          handle: 'mini-crossbody-bag',
          description: 'A compact crossbody bag for effortless style on the go.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'LuxCouture',
          type: 'Handbag',
          tags: ['Leather', 'Casual'],
          price: 55000,
          price_min: 55000,
          price_max: 55000,
          images: ['/images/fashion/p4.jpg'],
          featured_image: '/images/fashion/p4.jpg',
          url: '/products/mini-crossbody-bag',
          variants: [
            {
              id: 50041,
              title: 'Mini Crossbody Bag',
              price: 55000,
              selectedOptions: [{ name: 'Color', value: 'Cream' }],
            },
          ],
        },
        {
          id: 5005,
          title: 'Embossed Shoulder Bag',
          handle: 'embossed-shoulder-bag',
          description: 'A statement shoulder bag with embossed detailing for bold elegance.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'LuxCouture',
          type: 'Handbag',
          tags: ['Leather', 'Statement'],
          price: 105000,
          price_min: 105000,
          price_max: 105000,
          images: ['/images/fashion/p5.jpg'],
          featured_image: '/images/fashion/p5.jpg',
          url: '/products/embossed-shoulder-bag',
          variants: [
            {
              id: 50051,
              title: 'Embossed Shoulder Bag',
              price: 105000,
              selectedOptions: [{ name: 'Color', value: 'Black' }],
            },
          ],
        },
      ],
    },
  ]
}
export async function getFashionGroupCollections() {
  const collections = await getFashionCollections()
  return [
    {
      title: 'NEW ARRIVALS',
      handle: 'new-arrivals',
      description: 'lorem ipsum',
      collections,
    },
    {
      title: 'Best Selling',
      handle: 'best-selling',
      description: 'lorem ipsum',
      collections,
    },
    {
      title: 'Accessories',
      handle: 'accessories',
      description: 'lorem ipsum',
      collections,
    },
    {
      title: 'Footwear',
      handle: 'footwear',
      description: 'lorem ipsum',
      collections,
    },
    {
      title: 'Jewelry',
      handle: 'jewelry',
      description: 'lorem ipsum',
      collections,
    },
  ]
}

// ------------------------ COMMON DEMO DATA ------------------------
// ------------------------  COMMON DEMO DATA ------------------------
export async function getGroupCollections(theme: 'fashion' | 'shoe' | 'skincare') {
  if (theme === 'fashion') {
    return getFashionGroupCollections()
  }
  if (theme === 'shoe') {
    return getshoeGroupCollections()
  }
  if (theme === 'skincare') {
    return getSkincareGroupCollections()
  }
}
export async function getCollections(theme: 'fashion' | 'shoe' | 'skincare' | 'all') {
  if (theme === 'fashion') {
    return await getFashionCollections()
  }
  if (theme === 'shoe') {
    return await getshoeCollections()
  }
  if (theme === 'skincare') {
    return await getSkincareCollections()
  }

  if (theme === 'all') {
    const fashionCollections = getFashionCollections()
    const shoeCollections = getshoeCollections()
    const skincareCollections = getSkincareCollections()

    // use promises.all to get all collections
    const collections = await Promise.all([fashionCollections, shoeCollections, skincareCollections])
    return collections.flat()
  }
}
export async function getCollectionById(id: string) {
  const allCollections = await getCollections('all')
  return allCollections?.find((collection) => collection?.id.toString() === id)!
}
export async function getCollectionByHandle(handle: string) {
  // the demo data, 'all' -> get skincare collections
  if (handle === 'all') {
    const collections = (await getCollections('skincare')) || []
    const collection1 = collections[0]
    const collection4 = collections[4]
    return {
      id: '0',
      title: 'כל המוצרים',
      handle: '/all',
      description: 'גלו את כל מגוון מוצרי הטיפוח לעור, לשיער ולגוף. מצאו את המוצר המושלם עבור הצרכים שלכם.',

      updatedAt: '2025-05-06T10:00:00-04:00',
      image: '/images/skincare/c1.webp',
      url: '/collections/all-products',
      products: [...collection1.products, ...collection4.products].slice(0, 8),
    }
  }

  const allCollections = await getCollections('all')
  return allCollections?.find((collection) => collection?.handle === handle)!
}

// COMMON Types ------------------------------------------------------------------------
export type TCollection = Awaited<ReturnType<typeof getCollectionById>>
export type TProductItem = TCollection['products'][number]
