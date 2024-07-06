const users=[
        { id: 1, name: "Ashwadhama", bio: "A legendary warrior and an immortal character from Indian mythology." },
        { id: 2, name: "Karna", bio: "A great warrior from the Mahabharata, known for his generosity and martial prowess." }
];

const posts=[
        { id: 1, title: "The Tale of Ashwadhama", body: "Ashwadhama, the son of Dronacharya, is known for his valiant efforts in the Kurukshetra war. His immortality is a significant aspect of his legend.", userId: 1 },
        { id: 2, title: "The Generosity of Karna", body: "Karna, despite being the son of the Sun God, faced numerous challenges throughout his life. His unparalleled generosity and loyalty are key highlights of his character.", userId: 2 }
];

export const getPosts=async () =>
{
        return posts;
}

export const getPost=async ( { id } ) =>
{
        return posts.find( post => post.id==id );
}

export const getUser=async ( { id } ) =>
{
        return users.find( user => user.id==id );
}
