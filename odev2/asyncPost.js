const posts = [
    { title: "post 1", desc: "contents 1" },
    { title: "post 2", desc: "contents 2" },
    { title: "post 3", desc: "contents 3" },
]

const getPosts = () => {
    return new Promise((resolve, reject) => {
        console.log("Post alınıyor..")
        if (posts) {
            resolve(posts)
        } else {
            reject("Post alınamadı");
        }

        return
    })
}

const listPosts = () => {
    posts.map((posts) => {
        console.log(`Title: ${posts.title} Description: ${posts.desc}`);
    })
}

const addPost = (newPost) => {
    return new Promise((resolve, reject) => {
        console.log("Yeni post eklenmeye çalışılıyor..");

        if (posts) {
            posts.push(newPost);
            resolve("Post eklendi");
        } else {
            reject("Post eklenemedi");
        }
    })
}

async function processPosts() {
    try {
        const addedPosts = await addPost({ title: "post 4", desc: "contents 4" });
        console.log(addedPosts);
        const receivedPosts = await getPosts();
        console.log(receivedPosts);
    } catch (err) {
        console.log(err);
    }
}

processPosts();
