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
          name: 'מוצר לדוגמא 1',
          handle: 'nomad-tumbler',
          description:
            'This durable and portable insulated tumbler will keep your beverage at the perfect temperature during your next adventure.',
          href: '#',
          price: '40.95',
          status: 'מתכונן למשלוח',
          step: 1,
          date: 'מרץ 24, 2025',
          datetime: '2025-03-24',
          address: ['איתי RetailOs', 'כביש הפרדס 12', 'פתח תקווה, ישראל'],
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
      status: 'תאריך צפי הגעה 11/01/2025',
      invoiceHref: '#',
      products: [
        {
          id: 1,
          name: 'מוצר לדוגמא 2',
          handle: 'nomad-tumbler',
          description:
            'This durable and portable insulated tumbler will keep your beverage at the perfect temperature during your next adventure.',
          href: '#',
          price: '40.95',
          status: 'מתכונן למשלוח',
          step: 1,
          date: 'March 24, 2025',
          datetime: '2025-03-24',
          address: ['איתי RetailOs', 'כביש הפרדס 12', 'פתח תקווה, ישראל'],
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
          name: 'מוצר לדוגמא 3',
          handle: 'minimalist-wristwatch',
          description: 'This contemporary wristwatch has a clean, minimalist look and high quality components.',
          href: '#',
          price: '149.00',
          status: 'נשלח',
          step: 0,
          date: 'March 23, 2025',
          datetime: '2025-03-23',
          address: ['איתי RetailOs', 'כביש הפרדס 12', 'פתח תקווה, ישראל'],
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
      name: 'קנדה',
      code: 'CA',
      flagUrl: '/flags/ca.svg',
      regions: [
        'אלברטה',
        'קולומביה הבריטית',
        'מניטובה',
        'ניו ברונסוויק',
        'ניופאונדלנד ולברדור',
        'טריטוריות הצפון-מערביות',
        'נובה סקוטיה',
        'נונאווט',
        'אונטריו',
        'אי הנסיך אדוארד',
        'קוויבק',
        'ססקצ׳ואן',
        'יוקון',
      ],
    },
    {
      name: 'מקסיקו',
      code: 'MX',
      flagUrl: '/flags/mx.svg',
      regions: [
        'אגואסקליינטס',
        'באחה קליפורניה',
        'באחה קליפורניה הדרומית',
        'קמפצ׳ה',
        'צ׳יאפס',
        'צ׳יוואווה',
        'מקסיקו סיטי',
        'קואווילה',
        'קולימה',
        'דורנגו',
        'גואנחואטו',
        'גררו',
        'ידלגו',
        'חליסקו',
        'מדינת מקסיקו',
        'מיצ׳ואקאן',
        'מורלוס',
        'נייאריט',
        'נוואו לאון',
        'ואחאקה',
        'פואבלה',
        'קרטרו',
        'קינטנה רו',
        'סן לואיס פוטוסי',
        'סינלואה',
        'סונורה',
        'טבסקו',
        'טמאוליפס',
        'טלאסקלה',
        'ורקרוס',
        'יוקטן',
        'סקטקס',
      ],
    },
    {
      name: 'ארצות הברית',
      code: 'US',
      flagUrl: '/flags/us.svg',
      regions: [
        'אלבמה',
        'אלסקה',
        'סמואה האמריקנית',
        'אריזונה',
        'ארקנסו',
        'קליפורניה',
        'קולורדו',
        'קונטיקט',
        'דלאוור',
        'וושינגטון די.סי.',
        'מיקרונזיה',
        'פלורידה',
        'ג׳ורג׳יה',
        'גואם',
        'הוואי',
        'איידהו',
        'אילינוי',
        'אינדיאנה',
        'איווה',
        'קנזס',
        'קנטקי',
        'לואיזיאנה',
        'מיין',
        'איי מרשל',
        'מרילנד',
        'מסצ׳וסטס',
        'מישיגן',
        'מינסוטה',
        'מיסיסיפי',
        'מיזורי',
        'מונטנה',
        'נברסקה',
        'נבדה',
        'ניו המפשייר',
        'ניו ג׳רזי',
        'ניו מקסיקו',
        'ניו יורק',
        'קרוליינה הצפונית',
        'דקוטה הצפונית',
        'איי מריאנה הצפוניים',
        'אוהיו',
        'אוקלהומה',
        'אורגון',
        'פלאו',
        'פנסילבניה',
        'פוארטו ריקו',
        'רוד איילנד',
        'קרוליינה הדרומית',
        'דקוטה הדרומית',
        'טנסי',
        'טקסס',
        'יוטה',
        'ורמונט',
        'איי הבתולה של ארה״ב',
        'וירג׳יניה',
        'וושינגטון',
        'וירג׳יניה המערבית',
        'וויסקונסין',
        'ויומינג',
        'כוחות מזוינים אמריקה',
        'כוחות מזוינים אירופה',
        'כוחות מזוינים האוקיינוס השקט',
      ],
    },
    {
      name: 'ישראל',
      code: 'IL',
      flagUrl: '/flags/il.svg',
      regions: [
        'תל אביב',
        'ירושלים',
        'חיפה',
        'ראשון לציון',
        'פתח תקווה',
        'אשדוד',
        'נתניה',
        'באר שבע',
        'הרצליה',
        'חולון',
        'רמת גן',
        'אשקלון',
        'רחובות',
        'בני ברק',
        'בת ים',
        'כפר סבא',
        'רעננה',
        'קריית גת',
        'קריית אתא',
        'קריית ביאליק',
        'קריית מוצקין',
        'קריית ים',
        'קריית שמונה',
        'קריית מלאכי',
        'קריית אונו',
        'קריית טבעון',
        'קריית ארבע',
        'קריית גת',
        'קריית שמונה',
        'קריית מלאכי',
        'קריית אונו',
        'קריית טבעון',
        'קריית ארבע',
        'קריית גת',
        'קריית שמונה',
        'קריית מלאכי',
        'קריית אונו',
        'קריית טבעון',
        'קריית ארבע',
        'קריית גת',
        'קריית שמונה',
        'קריית מלאכי',
        'קריית אונו',
        'קריית טבעון',
        'קריית ארבע',
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
        id: 'variant-1',
        selectedOptions: [
          { name: 'Color', value: 'Black' },
          { name: 'Size', value: 'M' },
        ],
        price: '₪158.00',
        compareAtPrice: null,
        sku: 'SKU123',
        available: true,
        image: {
          id: 'id://ProductImage/21279156995',
          url: 'https://cdn.shopify.com/s/files/1/1312/0893/products/001_grande_89f870ed-dc56-4990-9aa5-4f11ddf13108.jpg?v=1491918957',
          altText: null,
          width: 517,
          height: 600,
        },
      },
      price: '₪158.00',
      compareAtPrice: null,
      sku: '',
      unitPrice: null,
      product: {
        title: 'Snare Boot',
        handle: 'snare-boot',
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
        id: 'variant-2',
        selectedOptions: [
          { name: 'Color', value: 'White' },
          { name: 'Size', value: 'L' },
        ],
        price: '₪168.00',
        compareAtPrice: null,
        sku: 'SKU124',
        available: true,
        image: {
          id: 'id://ProductImage/21279156996',
          url: 'https://cdn.shopify.com/s/files/1/1312/0893/products/002_grande.jpg',
          altText: null,
          width: 517,
          height: 600,
        },
      },
      price: '₪168.00',
      compareAtPrice: null,
      sku: '',
      unitPrice: null,
      product: {
        title: 'Snare Boot',
        handle: 'snare-boot',
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
      id: 'variant-3',
      selectedOptions: [
        { name: 'Color', value: 'Blue' },
        { name: 'Size', value: 'XL' },
      ],
      price: '₪178.00',
      compareAtPrice: null,
      sku: 'SKU125',
      available: true,
      image: {
        id: 'id://ProductImage/21279156997',
        url: 'https://cdn.shopify.com/s/files/1/1312/0893/products/003_grande.jpg',
        altText: null,
        width: 517,
        height: 600,
      },
    },
    price: '₪178.00',
    compareAtPrice: null,
    sku: '',
    unitPrice: null,
    product: {
      title: 'Snare Boot',
      handle: 'snare-boot',
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
      body: `<p><strong>OVERVIEW</strong> <br>This website is operated by graphql. Throughout the site, the terms "we", "us" and "our" refer to graphql. graphql offers this website, including all information, tools and Services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.</p>`,
    },
    subscriptionPolicy: {
      body: `<p>We have a 30-day return policy, which means you have 30 days after receiving your item to request a return.</p>`,
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
      body: `<p>We have a 30-day return policy, which means you have 30 days after receiving your item to request a return.</p>`,
      handle: 'refund-policy',
      id: 'gid://shopify/ShopPolicy/30401219',
      title: 'Refund Policy',
      url: 'https://checkout.shopify.com/13120893/policies/30401219.html?locale=en',
    },
    privacyPolicy: {
      body: `<p>Last updated: December 17, 2024</p>
<p>This Privacy Policy describes how graphql (the "Site", "we", "us", or "our") collects, uses, and discloses your personal information when you visit, use our services, or make a purchase from graphql.myshopify.com (the "Site") or otherwise communicate with us regarding the Site (collectively, the "Services").</p>`,
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
      title: 'פתרונות יופי טבעיים מרחבי העולם',
      handle: 'graduation-dresses-style-guide',
      description:
        'במשך מאות שנים נשים שיתפו זו עם זו את סודות היופי שלהן, והעבירו מתכונים וטקסים מדור לדור. סודות אלה מושרשים לעיתים קרובות בתרבות המקומית, באקלים ובחומרי הגלם הזמינים. חקירת סודות היופי הללו מעניקה לנו הבנה עמוקה יותר של מסורות היופי המגוונות הקיימות בעולם.',
      imageUrl: '/images/blog1.jpg',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      timeToRead: '2 min read',
    },
    {
      id: 2,
      title: 'פתרונות יופי טבעיים מרחבי העולם',
      handle: 'how-to-wear-your-eid-pieces-all-year-long',
      description:
        'במשך מאות שנים נשים שיתפו זו עם זו את סודות היופי שלהן, והעבירו מתכונים וטקסים מדור לדור. סודות אלה מושרשים לעיתים קרובות בתרבות המקומית, באקלים ובחומרי הגלם הזמינים. חקירת סודות היופי הללו מעניקה לנו הבנה עמוקה יותר של מסורות היופי המגוונות הקיימות בעולם.',
      imageUrl: '/images/blog2.jpg',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      timeToRead: '3 min read',
    },
    {
      id: 3,
      title: 'פתרונות יופי טבעיים מרחבי העולם',
      handle: 'the-must-have-shoei-friendly-fabrics-for-2024',
      description:
        'במשך מאות שנים נשים שיתפו זו עם זו את סודות היופי שלהן, והעבירו מתכונים וטקסים מדור לדור. סודות אלה מושרשים לעיתים קרובות בתרבות המקומית, באקלים ובחומרי הגלם הזמינים. חקירת סודות היופי הללו מעניקה לנו הבנה עמוקה יותר של מסורות היופי המגוונות הקיימות בעולם.',
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
      title: 'פתרונות יופי טבעיים מרחבי העולם',
      handle: 'graduation-dresses-style-guide',
      description:
        'במשך מאות שנים נשים שיתפו זו עם זו את סודות היופי שלהן, והעבירו מתכונים וטקסים מדור לדור. סודות אלה מושרשים לעיתים קרובות בתרבות המקומית, באקלים ובחומרי הגלם הזמינים. חקירת סודות היופי הללו מעניקה לנו הבנה עמוקה יותר של מסורות היופי המגוונות הקיימות בעולם.',
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
    title: 'יופי בעיני המתבונן',
    handle: 'graduation-dresses-style-guide',
    excerpt:
      'במשך מאות שנים נשים שיתפו זו עם זו את סודות היופי שלהן, והעבירו מתכונים וטקסים מדור לדור. סודות אלה מושרשים לעיתים קרובות בתרבות המקומית, באקלים ובחומרי הגלם הזמינים. חקירת סודות היופי הללו מעניקה לנו הבנה עמוקה יותר של מסורות היופי המגוונות הקיימות בעולם.',
    description:
      'במשך מאות שנים נשים שיתפו זו עם זו את סודות היופי שלהן, והעבירו מתכונים וטקסים מדור לדור. סודות אלה מושרשים לעיתים קרובות בתרבות המקומית, באקלים ובחומרי הגלם הזמינים. חקירת סודות היופי הללו מעניקה לנו הבנה עמוקה יותר של מסורות היופי המגוונות הקיימות בעולם.',
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
      <p>יופי הוא שפה אוניברסלית, אך הניבים שלה משתנים מאוד בין תרבויות שונות. מהטקסים המורכבים של יפן ועד לרכיבים הטבעיים של ברזיל – לכל מדינה יש את סודות היופי הייחודיים שלה. במאמר זה נצא למסע לחקור את מסורות היופי המגוונות מרחבי העולם.</p>
<p></p>
<p>במשך מאות שנים נשים שיתפו זו עם זו את סודות היופי שלהן, והעבירו מתכונים וטקסים מדור לדור. סודות אלה מושרשים לעיתים קרובות בתרבות המקומית, באקלים ובחומרי הגלם הזמינים. חקירת סודות היופי הללו מעניקה לנו הבנה עמוקה יותר של מסורות היופי המגוונות הקיימות בעולם.</p>
<p></p>
<p>בעולם של היום, שבו סטנדרטים של יופי מוכתבים לעיתים קרובות על ידי הרשתות החברתיות, זה מרענן לגלות סודות יופי שמבוססים על מסורת ורכיבים טבעיים. בין אם אתם מחפשים שגרת טיפוח חדשה לעור הפנים, טיפול לשיער או טיפ לאיפור – תמיד יש מה ללמוד מסודות היופי של תרבויות אחרות.</p>
<p></p>
<p class="block-img"><img src="https://images.unsplash.com/photo-1746240922260-efbea47dc532?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8" alt="Spa"></p>
<p></p>
<h2>7 סודות יופי עתיקים מכל רחבי העולם</h2>
<h3>1. יפן: אמבטיות סובין אורז לעור רך</h3>
<p>סובין אורז ידוע בתכונות הלחות שלו. נשים השתמשו באמבטיות סובין במשך מאות שנים כדי לרכך ולהבהיר את עורן. פשוט השרו את עצמכן באמבט חם עם שמן סובין אורז וחלב כדי ליהנות מהיתרונות.</p>
<p></p>
<h3>2. הודו: מסכות כורכום לפנים זוהרות</h3>
<p>כורכום הוא מרכיב יסוד בטקסי היופי ההודיים במשך אלפי שנים. ערבבו אבקת כורכום עם יוגורט ודבש כדי ליצור מסכה שתשאיר את העור זוהר ובריא.</p>
<p></p>
<h3>3. מרוקו: שמן ארגן לשיער ולעור מפנקים</h3>
<p>שמן ארגן עשיר בנוגדי חמצון וחומצות שומן חיוניות, ומזין ומגן על העור והשיער. השתמשו בו כמסכה לשיער, קרם לחות או מסיר איפור כדי ליהנות מהיתרונות שלו.</p>
<p></p>
<h3>4. קוריאה: ריר חלזונות לעור לח</h3>
<p>ריר חלזונות מכיל חומצה היאלורונית, גליקופרוטאינים וחומצה גליקולית – מה שהופך אותו למרכיב לחות עוצמתי. מרחו קרמים או סרומים עם ריר חלזונות כדי לנעול לחות ולהרגיע עור יבש.</p>
<p></p>
<h3>5. ברזיל: שמן קוקוס לשיער ולעור בריאים</h3>
<p>שמן קוקוס מזין ומלחח את העור והשיער ומשאיר אותם בריאים וזוהרים. השתמשו בו כמסכת שיער, קרם לחות או מסיר איפור.</p>
<p></p>
<h3>6. מצרים: אמבטיות חלב ודבש לעור רך</h3>
<p>אמבטיות חלב ודבש שימשו במשך מאות שנים לריכוך והבהרת העור. חומצה לקטית שבחלב מסייעת בקילוף עדין, והדבש מוסיף תכונות אנטי-בקטריאליות.</p>
<p></p>
<h3>7. סין: תה ירוק נגד הזדקנות</h3>
<p>תה ירוק מכיל תכונות אנטי-אייג'ינג חזקות, שעוזרות להפחית קמטים וקווים עדינים. שתו תה ירוק באופן קבוע או השתמשו בקרמים וסרומים עם תמצית תה ירוק.</p>
<p></p>
<p>על ידי שילוב סודות היופי הללו בשגרת הטיפוח שלכם, תוכלו לא רק לשפר את המראה הטבעי שלכם אלא גם להתחבר למורשת התרבותית העשירה של מדינות אלו. בין אם אתם מחפשים טיפול חדש לעור הפנים או לשיער – תמיד אפשר ללמוד משהו מהתרבויות השונות.</p>

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
      price: '₪32.00',
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
      price: '₪32.00',
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
      price: '₪40.95',
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
export async function getGroupCollections(theme: 'fashion' | 'shoe' | 'skincare' | 'drink') {
  if (theme === 'fashion') {
    return getFashionGroupCollections()
  }
  if (theme === 'shoe') {
    return getshoeGroupCollections()
  }
  if (theme === 'skincare') {
    return getSkincareGroupCollections()
  }
  if (theme === 'drink') {
    return getDrinkGroupCollections()
  }
}
export async function getCollections(theme: 'fashion' | 'shoe' | 'skincare' | 'drink' | 'all') {
  if (theme === 'fashion') {
    return await getFashionCollections()
  }
  if (theme === 'shoe') {
    return await getshoeCollections()
  }
  if (theme === 'skincare') {
    return await getSkincareCollections()
  }
  if (theme === 'drink') {
    return await getDrinkCollections()
  }

  if (theme === 'all') {
    const fashionCollections = getFashionCollections()
    const shoeCollections = getshoeCollections()
    const skincareCollections = getSkincareCollections()
    const drinkCollections = getDrinkCollections()

    // use promises.all to get all collections
    const collections = await Promise.all([fashionCollections, shoeCollections, skincareCollections, drinkCollections])
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

// ------------------------ DRINK DATA ------------------------
// ------------------------ DRINK DATA ------------------------
export type TDrinkCollection = {
  id: string
  title: string
  handle: string
  description: string
  updatedAt: string
  image: string
  url: string
  products: Array<{
    id: number
    title: string
    handle: string
    description: string
    published_at: string
    created_at: string
    vendor: string
    type: string
    tags: string[]
    price: number
    price_min: number
    price_max: number
    images: string[]
    featured_image: string
    url: string
    variants: Array<{
      id: number
      title: string
      price: number
      selectedOptions: Array<{
        name: string
        value: string
      }>
    }>
  }>
}

export type TDrinkGroupCollection = {
  title: string
  handle: string
  description: string
  collections: TDrinkCollection[]
}

export async function getDrinkCollections(): Promise<TDrinkCollection[]> {
  return [
    {
      id: '1',
      title: 'יין אדום',
      handle: 'red-wine',
      description: 'מגוון יינות אדומים איכותיים מכל העולם.',
      updatedAt: '2025-05-06T10:00:00-04:00',
      image: '/images/drink/product-1.jpg',
      url: '/collections/red-wine',
      products: [
        {
          id: 1001,
          title: 'מוצר 1',
          handle: 'red-wine-product-1',
          description: 'יין אדום איכותי.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'יקב הגפן',
          type: 'יין אדום',
          tags: ['יין', 'אדום'],
          price: 120,
          price_min: 120,
          price_max: 120,
          images: ['/images/drink/product-1.jpg', '/images/drink/product-2.jpg'],
          featured_image: '/images/drink/product-1.jpg',
          url: '/products/red-wine-product-1',
          variants: [
            {
              id: 10011,
              title: 'בקבוק 750 מ"ל',
              price: 120,
              selectedOptions: [{ name: 'נפח', value: '750 מ"ל' }],
            },
          ],
        },
        {
          id: 1002,
          title: 'מוצר 2',
          handle: 'red-wine-product-2',
          description: 'יין אדום פירותי.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'יקב הגפן',
          type: 'יין אדום',
          tags: ['יין', 'אדום'],
          price: 110,
          price_min: 110,
          price_max: 110,
          images: ['/images/drink/product-2.jpg', '/images/drink/product-3.jpg'],
          featured_image: '/images/drink/product-2.jpg',
          url: '/products/red-wine-product-2',
          variants: [
            {
              id: 10012,
              title: 'בקבוק 750 מ"ל',
              price: 110,
              selectedOptions: [{ name: 'נפח', value: '750 מ"ל' }],
            },
          ],
        },
        {
          id: 1003,
          title: 'מוצר 3',
          handle: 'red-wine-product-3',
          description: 'יין אדום חצי יבש.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'יקב הגפן',
          type: 'יין אדום',
          tags: ['יין', 'אדום'],
          price: 115,
          price_min: 115,
          price_max: 115,
          images: ['/images/drink/product-3.jpg', '/images/drink/product-4.jpg'],
          featured_image: '/images/drink/product-3.jpg',
          url: '/products/red-wine-product-3',
          variants: [
            {
              id: 10013,
              title: 'בקבוק 750 מ"ל',
              price: 115,
              selectedOptions: [{ name: 'נפח', value: '750 מ"ל' }],
            },
          ],
        },
        {
          id: 1004,
          title: 'מוצר 4',
          handle: 'red-wine-product-4',
          description: 'יין אדום מתוק.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'יקב הגפן',
          type: 'יין אדום',
          tags: ['יין', 'אדום'],
          price: 130,
          price_min: 130,
          price_max: 130,
          images: ['/images/drink/product-4.jpg', '/images/drink/product-5.jpg'],
          featured_image: '/images/drink/product-4.jpg',
          url: '/products/red-wine-product-4',
          variants: [
            {
              id: 10014,
              title: 'בקבוק 750 מ"ל',
              price: 130,
              selectedOptions: [{ name: 'נפח', value: '750 מ"ל' }],
            },
          ],
        },
        {
          id: 1005,
          title: 'מוצר 5',
          handle: 'red-wine-product-5',
          description: 'יין אדום מתוק.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'יקב הגפן',
          type: 'יין אדום',
          tags: ['יין', 'אדום'],
          price: 130,
          price_min: 130,
          price_max: 130,
          images: ['/images/drink/product-5.jpg', '/images/drink/product-6.jpg'],
          featured_image: '/images/drink/product-5.jpg',
          url: '/products/red-wine-product-5',
          variants: [
            {
              id: 10014,
              title: 'בקבוק 750 מ"ל',
              price: 130,
              selectedOptions: [{ name: 'נפח', value: '750 מ"ל' }],
            },
          ],
        },
      ],
    },
    {
      id: '2',
      title: 'יין לבן',
      handle: 'white-wine',
      description: 'מגוון יינות לבנים איכותיים מכל העולם.',
      updatedAt: '2025-05-06T10:00:00-04:00',
      image: '/images/drink/product-3.jpg',
      url: '/collections/white-wine',
      products: [
        {
          id: 2001,
          title: 'מוצר 3',
          handle: 'white-wine-product-1',
          description: 'יין לבן רענן.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'יקב הגפן',
          type: 'יין לבן',
          tags: ['יין', 'לבן'],
          price: 100,
          price_min: 100,
          price_max: 100,
          images: ['/images/drink/product-4.jpg', '/images/drink/product-5.jpg'],
          featured_image: '/images/drink/product-4.jpg',
          url: '/products/white-wine-product-1',
          variants: [
            {
              id: 20011,
              title: 'בקבוק 750 מ"ל',
              price: 100,
              selectedOptions: [{ name: 'נפח', value: '750 מ"ל' }],
            },
          ],
        },
        {
          id: 2002,
          title: 'מוצר 4',
          handle: 'white-wine-product-2',
          description: 'יין לבן יבש.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'יקב הגפן',
          type: 'יין לבן',
          tags: ['יין', 'לבן'],
          price: 95,
          price_min: 95,
          price_max: 95,
          images: ['/images/drink/product-5.jpg', '/images/drink/product-6.jpg'],
          featured_image: '/images/drink/product-5.jpg',
          url: '/products/white-wine-product-2',
          variants: [
            {
              id: 20012,
              title: 'בקבוק 750 מ"ל',
              price: 95,
              selectedOptions: [{ name: 'נפח', value: '750 מ"ל' }],
            },
          ],
        },
      ],
    },
    {
      id: '3',
      title: 'בירה',
      handle: 'beer',
      description: 'מבחר בירות איכותיות.',
      updatedAt: '2025-05-06T10:00:00-04:00',
      image: '/images/drink/product-5.jpg',
      url: '/collections/beer',
      products: [
        {
          id: 3001,
          title: 'מוצר 5',
          handle: 'beer-product-1',
          description: 'בירה לאגר מרעננת.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'מבשלת בירה',
          type: 'בירה',
          tags: ['בירה', 'לאגר'],
          price: 30,
          price_min: 30,
          price_max: 30,
          images: ['/images/drink/product-5.jpg', '/images/drink/product-4.jpg'],
          featured_image: '/images/drink/product-5.jpg',
          url: '/products/beer-product-1',
          variants: [
            {
              id: 30011,
              title: 'בקבוק 500 מ"ל',
              price: 30,
              selectedOptions: [{ name: 'נפח', value: '500 מ"ל' }],
            },
          ],
        },
        {
          id: 3002,
          title: 'מוצר 6',
          handle: 'beer-product-2',
          description: 'בירה כהה ועשירה.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'מבשלת בירה',
          type: 'בירה',
          tags: ['בירה', 'כהה'],
          price: 32,
          price_min: 32,
          price_max: 32,
          images: ['/images/drink/product-6.jpg'],
          featured_image: '/images/drink/product-6.jpg',
          url: '/products/beer-product-2',
          variants: [
            {
              id: 30012,
              title: 'בקבוק 500 מ"ל',
              price: 32,
              selectedOptions: [{ name: 'נפח', value: '500 מ"ל' }],
            },
          ],
        },
      ],
    },
    {
      id: '4',
      title: 'משקאות חריפים',
      handle: 'spirits',
      description: 'מבחר משקאות חריפים איכותיים.',
      updatedAt: '2025-05-06T10:00:00-04:00',
      image: '/images/drink/product-7.jpg',
      url: '/collections/spirits',
      products: [
        {
          id: 4001,
          title: 'מוצר 7',
          handle: 'spirit-product-1',
          description: 'וודקה איכותית.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'חברת אלכוהול',
          type: 'וודקה',
          tags: ['וודקה', 'משקאות חריפים'],
          price: 80,
          price_min: 80,
          price_max: 80,
          images: ['/images/drink/product-7.jpg'],
          featured_image: '/images/drink/product-7.jpg',
          url: '/products/spirit-product-1',
          variants: [
            {
              id: 40011,
              title: 'בקבוק 700 מ"ל',
              price: 80,
              selectedOptions: [{ name: 'נפח', value: '700 מ"ל' }],
            },
          ],
        },
        {
          id: 4002,
          title: 'מוצר 8',
          handle: 'spirit-product-2',
          description: 'וויסקי משובח.',
          published_at: '2025-05-06T10:00:00-04:00',
          created_at: '2025-05-06T10:00:00-04:00',
          vendor: 'חברת אלכוהול',
          type: 'וויסקי',
          tags: ['וויסקי', 'משקאות חריפים'],
          price: 120,
          price_min: 120,
          price_max: 120,
          images: ['/images/drink/product-8.jpg'],
          featured_image: '/images/drink/product-8.jpg',
          url: '/products/spirit-product-2',
          variants: [
            {
              id: 40012,
              title: 'בקבוק 700 מ"ל',
              price: 120,
              selectedOptions: [{ name: 'נפח', value: '700 מ"ל' }],
            },
          ],
        },
      ],
    },
  ]
}

export async function getDrinkGroupCollections(): Promise<TDrinkGroupCollection[]> {
  const collections = await getDrinkCollections()
  return [
    {
      title: 'חדש בחנות',
      handle: 'new-arrivals',
      description: 'המשקאות החדשים שהגיעו לחנות',
      collections,
    },
    {
      title: 'הנמכרים ביותר',
      handle: 'best-selling',
      description: 'המשקאות הנמכרים ביותר',
      collections,
    },
    {
      title: 'יין',
      handle: 'wine',
      description: 'מגוון יינות איכותיים',
      collections,
    },
    {
      title: 'משקאות חריפים',
      handle: 'spirits',
      description: 'מגוון משקאות חריפים איכותיים',
      collections,
    },
    {
      title: 'בירה',
      handle: 'beer',
      description: 'מגוון בירות איכותיות',
      collections,
    },
  ]
}

export async function getShopPolicies() {
  return {
    termsOfService: {
      id: 'gid://shopify/ShopPolicy/30401347',
      handle: 'terms-of-service',
      body: '<p><strong>OVERVIEW</strong><br>This website is operated by graphql. Throughout the site, the terms "we", "us" and "our" refer to graphql. graphql offers this website, including all information, tools and Services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.</p>',
      title: 'Terms of Service',
      url: 'https://checkout.shopify.com/13120893/policies/30401347.html?locale=en',
    },
    subscriptionPolicy: {
      body: '<p>We have a 30-day return policy, which means you have 30 days after receiving your item to request a return.</p>',
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
      body: '<p>We have a 30-day return policy, which means you have 30 days after receiving your item to request a return.</p>',
      handle: 'refund-policy',
      id: 'gid://shopify/ShopPolicy/30401219',
      title: 'Refund Policy',
      url: 'https://checkout.shopify.com/13120893/policies/30401219.html?locale=en',
    },
    privacyPolicy: {
      body: '<p>Last updated: December 17, 2024</p><p>This Privacy Policy describes how graphql (the "Site", "we", "us", or "our") collects, uses, and discloses your personal information when you visit, use our services, or make a purchase from graphql.myshopify.com (the "Site") or otherwise communicate with us regarding the Site (collectively, the "Services").</p>',
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
