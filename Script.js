// Simulate data fetching functions
function fetchUserProfile() 
    return new Promise(resolve, reject) => {
        setTimeout() => {
            Math.random()  resolve("User Profile") : reject("Failed to fetch user profile");
        }, 
    
}

function fetchPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => 
            Math.random()  resolve) : reject("Failed to fetch posts");
        }, 1000);
    };


function fetchComments() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random()  resolve : reject("Failed to fetch comments");
        }, 1000);
    });
}

// Sequential data fetching
async function getUserContentSequential() {
     {
        const userProfile =  fetchUserProfile();
        console.log("User profile retrieved:", userProfile);
        
        const posts =  fetchPosts();
        console.log("Posts retrieved:", posts);
        
        const comments =  Promise.all posts.map() => fetchComments();
        console.log("Comments retrieved:", comments);
        
    } catch (error) {
        console.error("Error:", error);
    }
}

// Parallel data fetching
async function getUserContentParallel() {
     {
        const [userProfile, posts] = Promise.all([fetchUserProfile(), fetchPosts();
        console.log("User profile retrieved:", userProfile);
        console.log("Posts retrieved:", posts);
        
        const comments =  Promise.all(posts.map() => fetchComments);
        console.log("Comments retrieved:", comments);
        
    } catch (error) {
        console.error("Error:", error);
    }
}

// Call the functions to see the results
getUserContentSequential();
getUserContentParallel();

