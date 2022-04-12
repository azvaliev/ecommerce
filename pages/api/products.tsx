import type { NextApiRequest, NextApiResponse } from 'next'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
	try {
		res.status(200).json(products);
	} catch (err) {
		res.status(400).json({error: "data not available"});
	}
}

export default handler;

const products = [
	{
		"id": 0,
		"title": "Light Coffee Vest",
		"price": 84.99,
		"discount": 94.99,
		"description": "Casual yet classy, this coffee-colored suit vest is suitable for all sorts of occasions.",
		"categories": ["vest", "plain", "standard"],
		"modelIG": "mohamadkhosravi7",
		"images": [
			{
				"src": "https://res.cloudinary.com/dhqlxce9z/image/upload/v1648777212/perseus/vest-light-brown-2_yj6yyh.jpg",
				"alt": "Man sitting and wearing light brown suit"
			}, {		
				"src": "https://res.cloudinary.com/dhqlxce9z/image/upload/v1648777213/perseus/vest-light-brown_tpzakf.jpg",
				"alt": "Man standing and wearing light brown suit"
			}
		],
		"timestamp": 1648857003734
	},
	{
		"id": 1,
		"title": "Dark Coffee Vest",
		"price": 94.99,
		"discount": 99.99,
		"description": "Hot day? Ditch the jacket and keep the class with this dark coffee-colored vest.",
		"categories": ["vest", "plain", "limited"],
		"modelIG": "mohamadkhosravi7",
		"images": [
			{
				"src": "https://res.cloudinary.com/dhqlxce9z/image/upload/v1648777213/perseus/vest-brown_rbbsag.jpg",
				"alt": "Man walking wearing dark brown suit"		
			},
			{
				"src": "https://res.cloudinary.com/dhqlxce9z/image/upload/v1648777215/perseus/vest-brown-2_zpwpzw.jpg",
				"alt": "Man leaning and wearing dark brown suit"
			}
		],
		"timestamp": 1648857003722
	},
	{
		"id": 2,
		"title": "White Egyptian Shirt",
		"price": 69.99,
		"discount": false,
		"description": "Is regular cotton/polyester not doing it? Experience the premium feeling of Egyptian cotton wherever you may be",
		"categories": ["shirt", "plain", "limited"],
		"modelIG": "mohamadkhosravi7",
		"images": [
			{
				"src": "https://res.cloudinary.com/dhqlxce9z/image/upload/v1648777215/perseus/shirt-white-2_va1xw3.jpg",
				"alt": "Man leaning and wearing white button up with suspenders"
			}, {	
				"src": "https://res.cloudinary.com/dhqlxce9z/image/upload/v1648777215/perseus/shirt-white_eb6laz.jpg",
				"alt": "Man leaning and wearing white button up with suspenders"
			}
		],
		"timestamp": 1648857003800
	},
	{
		"id": 3,
		"title": "Classic Blue Shirt",
		"price": 49.99,
		"discount": false,
		"description": "Pour up another cup of coffee, because this classic blue will have you ready to tackle Mondays with style.",
		"categories": ["shirt", "striped", "standard"],
		"modelIG": "mohamadkhosravi7",
		"images": [
			{
				"src": "https://res.cloudinary.com/dhqlxce9z/image/upload/v1648777215/perseus/shirt-stripe-blue_pmvdcz.jpg",
				"alt": "Man standing wearing blue striped shirt and tie with sunglasses"
			}, {
				"src": "https://res.cloudinary.com/dhqlxce9z/image/upload/v1648777215/perseus/shirt-stripe-blue-2_wwjkgh.jpg",
				"alt": "Man standing wearing blue striped shirt and tie"
			}, {
				"src": "https://res.cloudinary.com/dhqlxce9z/image/upload/v1648777214/perseus/shirt-stripe-blue-4_kynj3i.jpg",
				"alt": "Man standing wearing blue striped shirt and tie"
			}, {
				"src": "https://res.cloudinary.com/dhqlxce9z/image/upload/v1648777214/perseus/shirt-stripe-blue-3_ieowjj.jpg",
				"alt": "Man standing wearing blue striped shirt and tie with hands in pockets"
			}
		],
		"timestamp": 1648857003500
	},
	{
		"id": 4,
		"title": "Khaki Suit Jacket",
		"price": 399.99,
		"discount": false,
		"description": "A truly versatile suit jacket that will have you suited from any occasion, from dates to Monday meetings.",
		"categories": ["jacket", "plain", "standard"],
		"modelIG": "mohamadkhosravi7",
		"images": [
			{
				"src": "https://res.cloudinary.com/dhqlxce9z/image/upload/v1648777213/perseus/jacket-tan_vfpcww.jpg",
				"alt": "Man standing and adjusting khaki suit"
			}, {
				"src": "https://res.cloudinary.com/dhqlxce9z/image/upload/v1648777214/perseus/jacket-tan-2_jsgitg.jpg",
				"alt": "Man in khaki suit standing with hand in pocket"
			}
		],
		"timestamp": 1648857003780
	},
	{
		"id": 5,
		"title": "Grey Plaid Suit Jacket",
		"price": 349.99,
		"discount": 369.99,
		"description": "We're bringing plaid back! Live your best life with this classy suit jacket",
		"categories": ["jacket", "plaid", "limited"],
		"modelIG": "rickygrig",
		"images": [
			{
				"src": "https://res.cloudinary.com/dhqlxce9z/image/upload/v1648777214/perseus/jacket-grey-plad_nyuuid.jpg",
				"alt": "Man in plaid grey suit jacket standing in field"
			}
		],
		"timestamp": 1648857003900 
	},
	{
		"id": 6,
		"title": "Grey Suit Jacket",
		"price": 369.99,
		"discount": false,
		"description": "Sometimes simplicity is key. This minimal grey suit jacket is easy to match and will keep you slick",
		"categories": ["jacket", "plain", "standard"],
		"modelIG": "mohamadkhosravi7",
		"images": [
			{
				"src": "https://res.cloudinary.com/dhqlxce9z/image/upload/v1648777213/perseus/jacket-grey-3_tbboxv.jpg",
				"alt": "Man in plain grey suit jacket walking"
			}, {
				"src": "https://res.cloudinary.com/dhqlxce9z/image/upload/v1648777213/perseus/jacket-grey_v3aeaa.webp",
				"alt": "Man in plain grey jacket standing with hand in pocket"
			}, {
				"src": "https://res.cloudinary.com/dhqlxce9z/image/upload/v1648777215/perseus/jacket-grey-2_gafuma.jpg",
				"alt": "Man in plain grey jacket walking and sticking hands in pockets"
			}
		],
		"timestamp": 1648857003734
	},
	{
		"id": 7,
		"title": "Plain Black Suit Jacket",
		"price": 399.99,
		"discount": false,
		"description": "There's no denying it, there's something uniquely slick about a black suit jacket. A style anyone can pull off",
		"categories": ["jacket", "plain", "limited"],
		"modelIG": "mohamadkhosravi7",
		"images": [
			{
				"src": "https://res.cloudinary.com/dhqlxce9z/image/upload/v1648777212/perseus/jacket-black-on-black-2_ef6qkb.jpg",
				"alt": "Man standing and adjusting his black suit jacket"
			}, {
				"src": "https://res.cloudinary.com/dhqlxce9z/image/upload/v1648777211/perseus/jacket-black-on-black_ny9rlt.webp",
				"alt": "Man in black suit jacket walking with hand in pocket"
			}, {
				"src": "https://res.cloudinary.com/dhqlxce9z/image/upload/v1648777212/perseus/jacket-black-on-black-3_p5ckon.jpg",
				"alt": "Man in black suit jacket standing with hand in pocket"
			}
		],
		"timestamp": 1648857004000
	}
]