
fetch('https://jsonplaceholder.typicode.com/posts')
.then((response) => response.json())
.then((json) => console.log(json)); 



// CREATE

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1
    }),
    headers:{
        'content-type': 'application/json; charset=UTF-8'
    }
})
.then((response) => response.json())
.then((json) => console.log(json));



// UPDATE
    
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({ 
        id: 1,
        title: 'hello',
        body: 'hello world',
        userId: 1
    }),
    headers:{
        'content-type': 'application/json; charset=UTF-8'
    }
})
.then((response) => response.json())
.then((json) => console.log(json));






fetch('https://jsonplaceholder.typicode.com/posts/1', {

    method:'PATCH',
    body: JSON.stringify({
        title: 'hiiiii'
    }),
    headers: {
        'content-type' : 'application/json; charset=UTF-8'
    }

})
.then((response) => response.json())
.then((json) => console.log(json));





// DELETE


fetch('https://jsonplaceholder.typicode.com/posts/5', {
    method: 'DELETE'
  });
