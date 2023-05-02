<script> 
    export let data;
    let articles = data?.data.data;
    console.log(articles)
    console.log(articles[0].id)
    console.log(articles[0].attributes.title)
</script>


<div>


{#each articles as article }
    <div class=" flex flex-col container p-2 bg-white mx-auto mb-8 w-2/3 relative space-x-5 shadow-xl rounded-lg">
    <div class="absolute w-12 h-12 bg-blue-800 text-white -top-5 -left-3 text-center mx-auto">
        <p class="text-2xl pt-1">{article.attributes.rating}</p>
    </div>
    <div class="p-5">
        <h3 class="text-2xl leading-normal font-bold">{article.attributes.title}</h3>
        <small>Console review</small>
        <p class="h-16 p-3 overflow-hidden">{article.attributes.body}......</p>
        <a class="hover:underline-offset-2 hover:decoration-dotted hover:decoration-1
         hover:text-blue-800 hover:underline hover:decoration-blue-800" href="/details/{article.id}">Read More</a>
    </div>
    </div>
{/each}

</div>