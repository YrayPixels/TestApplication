import { Feather, AntDesign, Ionicons, MaterialCommunityIcons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';

// export const MainColor = '#187cf6'
export const MainColor = '#050e4a'
export const TextColor = '#0a62d1'
export const lightcol = '#bfd8fb'

export const Slides = [
    {
        "background_image": require('../assets/slides/img1.png'),

        "heading": "DIVIDE",
        "subheading": "Share Subscriptions & Split Payments with Friends",
        "description": "Discover a whole new way to enjoy subscriptions together with your friends. Our app makes it effortless to share your favorite services while managing payments hassle-free.",
        "cta_button_text": "Skip"
    },
    {

        "background_image": require('../assets/slides/img2.png'),

        "heading": "Share Subscriptions Effortlessly",
        "subheading": "Connect and Enjoy Together",
        "description": "Why pay full price for subscriptions you love when you can share them with friends? Easily invite your buddies, link your accounts, and start enjoying premium services together.",
        "cta_button_text": "Skip"
    },
    {
        "background_image": require('../assets/slides/img3.png'),
        "heading": "Simplified Payments",
        "subheading": "No More Bill-Splitting Headaches",
        "description": "Tired of chasing friends for money each month? Our app automatically splits subscription costs among group members, ensuring everyone pays their fair share without any hassle.",
        "cta_button_text": "Start Sharing"
    }
]
export const Subscriptions = [
    {
        name: "Netflix",
        image: require('../assets/subs/netflix.png'),
        price: "$12.99",
        description: "Netflix is a popular streaming service that offers a wide variety of TV shows, movies, documentaries, and original content.",
        link: "https://www.netflix.com/",
        banner: require('../assets/subs/Netflix.jpeg'),
        bgcolor: 'light'
    },
    {
        name: "Freepik",
        image: require('../assets/subs/freepik.jpeg'),
        description: "Freepik is a popular platform that offers a vast collection of free and premium graphic resources, including vector graphics, illustrations, icons, photos, and templates.",
        link: "https://www.freepik.com/",
        banner: require('../assets/subs/Freepik.png'),
        bgcolor: 'dark'


    },
    {
        name: "ChatGPT",
        image: require('../assets/subs/chatii.jpg'),
        description: "ChatGPT is an advanced language model developed by OpenAI. It is based on the GPT-3.5 architecture and is designed to understand and generate human-like text.",
        link: "https://www.openai.com/",
        banner: require('../assets/subs/chatgpt.png'),
        bgcolor: 'light'



    },
    {
        name: "Amazon Prime Video",
        image: require('../assets/subs/prime.png'),
        price: "$9.99",
        description: "Amazon Prime Video provides a vast selection of movies, TV shows, and exclusive Amazon Originals for subscribers to enjoy.",
        link: "https://www.amazon.com/primevideo",
        banner: require('../assets/subs/primetv.jpeg'),
        bgcolor: 'light'

    },
    {
        name: "Disney+",
        image: require('../assets/subs/disney.jpeg'),
        price: "$7.99",
        description: "Disney+ offers a magical collection of Disney movies, Pixar films, Star Wars, Marvel, National Geographic, and more.",
        link: "https://www.disneyplus.com/",
        banner: require('../assets/subs/disney.png'),
        bgcolor: 'light'

    },
    {
        name: "Hulu",
        image: require('../assets/subs/hulu.png'),
        price: "$6.99",
        description: "Hulu provides on-demand access to thousands of hit TV shows, movies, and original series.",
        link: "https://www.hulu.com/",
        banner: require('../assets/subs/hulu.jpeg'),
        bgcolor: 'light'

    },
    {
        name: "HBO Max",
        image: require('../assets/subs/hbomax.jpeg'),
        price: "$14.99",
        description: "HBO Max offers a vast library of HBO's original series, blockbuster movies, and exclusive Max Originals.",
        link: "https://www.hbomax.com/",
        banner: require('../assets/subs/hbo.png'),
        bgcolor: 'light'

    },
    {
        name: "Apple TV+",
        image: require('../assets/subs/appletv.jpeg'),
        price: "$4.99",
        description: "Apple TV+ is home to original Apple Originals, including TV shows, movies, and documentaries.",
        link: "https://www.apple.com/apple-tv-plus/",
        banner: require('../assets/subs/apple.png'),
        bgcolor: 'light'

    },
];
export const activeSubscriptions = [
    {
        name: "Netflix",
        image: require('../assets/subs/netflix.png'),
        price: "$12.99",
        description: "Netflix is a popular streaming service that offers a wide variety of TV shows, movies, documentaries, and original content.",
        link: "https://www.netflix.com/",
    },
    {
        name: "Amazon Prime Video",
        image: require('../assets/subs/prime.png'),
        price: "$9.99",
        description: "Amazon Prime Video provides a vast selection of movies, TV shows, and exclusive Amazon Originals for subscribers to enjoy.",
        link: "https://www.amazon.com/primevideo",
    },
    {
        name: "Disney+",
        image: require('../assets/subs/disney.jpeg'),
        price: "$7.99",
        description: "Disney+ offers a magical collection of Disney movies, Pixar films, Star Wars, Marvel, National Geographic, and more.",
        link: "https://www.disneyplus.com/",
    },
    {
        name: "Hulu",
        image: require('../assets/subs/hulu.png'),
        price: "$6.99",
        description: "Hulu provides on-demand access to thousands of hit TV shows, movies, and original series.",
        link: "https://www.hulu.com/",
    },
    {
        name: "HBO Max",
        image: require('../assets/subs/hbomax.jpeg'),
        price: "$14.99",
        description: "HBO Max offers a vast library of HBO's original series, blockbuster movies, and exclusive Max Originals.",
        link: "https://www.hbomax.com/",
    },
    {
        name: "Apple TV+",
        image: require('../assets/subs/appletv.jpeg'),
        price: "$4.99",
        description: "Apple TV+ is home to original Apple Originals, including TV shows, movies, and documentaries.",
        link: "https://www.apple.com/apple-tv-plus/",
    },
];
export const features = [
    {
        name: 'Airtime',
        icon: <Feather name="phone-call" size={20} color={MainColor} />,
    },
    {
        name: 'Active',
        icon: <Feather name="phone-call" size={20} color={MainColor} />,


    },
    {
        name: 'Group',
        icon: <Feather name="phone-call" size={20} color={MainColor} />,

    },
    {
        name: 'Cash',
        icon: <Ionicons name="cash-outline" size={20} color={MainColor} />

    },

]
export const features2 = [
    {
        name: 'Airtime',
        icon: <Feather name="phone-call" size={20} color={MainColor} />,
    },
    {
        name: 'Active',
        icon: <Feather name="phone-call" size={20} color={MainColor} />,


    },
    {
        name: 'Group',
        icon: <Feather name="phone-call" size={20} color={MainColor} />,

    },
    {
        name: 'Group Save',
        icon: <FontAwesome5 name="piggy-bank" size={20} color={MainColor} />


    },

]
export const groups = [
    {
        name: 'JudeCliq',
        subcription: 'Netflix',
        members: 4,
        amount: 12.99,
        groupMembers: [
            {
                name: 'John Doe',
                profile: require('../assets/subs/netflix.png'),
                amount: 12.99,
                paid: true,
                date: '12/12/2021'
            },
            {
                name: 'Mike Doe',
                profile: null,
                amount: 12.99,
                paid: true,
                date: '12/12/2021'
            }
            ,
            {
                name: 'KC Mitchell',
                profile: require('../assets/subs/bluebgn.jpeg'),
                amount: 12.99,
                paid: true,
                date: '12/12/2021'
            },
            {
                name: 'John Bello',
                profile: null,
                amount: 12.99,
                paid: true,
                date: '12/12/2021'
            },
            {
                name: 'Biodun Bello',
                profile: null,
                amount: 12.99,
                paid: true,
                date: '12/12/2021'
            }
            ,
            {
                name: 'James Cassie',
                profile: null,
                amount: 12.99,
                paid: true,
                date: '12/12/2021'
            },
            {
                name: 'Mike Doe',
                profile: null,
                amount: 12.99,
                paid: true,
                date: '12/12/2021'
            }
            ,
            {
                name: 'KC Mitchell',
                profile: null,
                amount: 12.99,
                paid: true,
                date: '12/12/2021'
            },
            {
                name: 'John Bello',
                profile: null,
                amount: 12.99,
                paid: true,
                date: '12/12/2021'
            },
            {
                name: 'Biodun Bello',
                profile: null,
                amount: 12.99,
                paid: true,
                date: '12/12/2021'
            }
        ]
    },
    {

        name: 'BigBoys',
        subcription: 'Netflix',
        members: 4,
        amount: 12.99,

        groupMembers: [
            {
                name: 'John Doe',
                profile: null,
                amount: 12.99,
                paid: true,
                date: '12/12/2021'
            },
            {
                name: 'John Doe',
                profile: require('../assets/subs/freepik.jpeg'),

                amount: 12.99,
                paid: true,
                date: '12/12/2021'
            }
            ,
            {
                name: 'John Doe',
                profile: require('../assets/subs/chatii.jpg'),
                amount: 12.99,
                paid: true,
                date: '12/12/2021'
            }
        ]
    },

    {
        name: 'Teslas',
        subcription: 'Netflix',
        members: 4,
        amount: 12.99,

        groupMembers: [
            {
                name: 'John Doe',
                profile: null,
                amount: 12.99,
                paid: true,
                date: '12/12/2021'
            },
            {
                name: 'Mike Doe',
                profile: null,
                amount: 12.99,
                paid: true,
                date: '12/12/2021'
            }
            ,
            {
                name: 'KC Mitchell',
                profile: null,
                amount: 12.99,
                paid: true,
                date: '12/12/2021'
            },
            {
                name: 'John Bello',
                profile: null,
                amount: 12.99,
                paid: true,
                date: '12/12/2021'
            },
            {
                name: 'Biodun Bello',
                profile: null,
                amount: 12.99,
                paid: true,
                date: '12/12/2021'
            }
            ,
            {
                name: 'James Cassie',
                profile: null,
                amount: 12.99,
                paid: true,
                date: '12/12/2021'
            },
        ]
    },

    {
        name: 'Mandems',
        subcription: 'Netflix',
        members: 4,
        amount: 12.99,

        groupMembers: [
            {
                name: 'John Doe',
                profile: null,
                amount: 12.99,
                paid: true,
                date: '12/12/2021'
            },
            {
                name: 'Mike Doe',
                profile: null,
                amount: 12.99,
                paid: true,
                date: '12/12/2021'
            }
            ,
            {
                name: 'KC Mitchell',
                profile: null,
                amount: 12.99,
                paid: true,
                date: '12/12/2021'
            },
            {
                name: 'John Bello',
                profile: null,
                amount: 12.99,
                paid: true,
                date: '12/12/2021'
            },
            {
                name: 'Biodun Bello',
                profile: null,
                amount: 12.99,
                paid: true,
                date: '12/12/2021'
            }
            ,
            {
                name: 'James Cassie',
                profile: null,
                amount: 12.99,
                paid: true,
                date: '12/12/2021'
            },
            {
                name: 'Mike Doe',
                profile: null,
                amount: 12.99,
                paid: true,
                date: '12/12/2021'
            }
            ,
            {
                name: 'KC Mitchell',
                profile: null,
                amount: 12.99,
                paid: true,
                date: '12/12/2021'
            },
            {
                name: 'John Bello',
                profile: null,
                amount: 12.99,
                paid: true,
                date: '12/12/2021'
            },
            {
                name: 'Biodun Bello',
                profile: null,
                amount: 12.99,
                paid: true,
                date: '12/12/2021'
            }
        ]
    },
    {

        name: 'Adebola and Friends',
        subcription: 'Netflix',
        members: 4,
        amount: 12.99,

        groupMembers: [
            {
                name: 'John Doe',
                profile: null,
                amount: 12.99,
                paid: true,
                date: '12/12/2021'
            },
            {
                name: 'John Doe',
                profile: require('../assets/subs/freepik.jpeg'),

                amount: 12.99,
                paid: true,
                date: '12/12/2021'
            }
            ,
            {
                name: 'John Doe',
                profile: require('../assets/subs/chatii.jpg'),
                amount: 12.99,
                paid: true,
                date: '12/12/2021'
            }
        ]
    },

]

