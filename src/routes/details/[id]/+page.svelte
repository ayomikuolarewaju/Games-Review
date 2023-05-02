<script>
    
    import {page} from '$app/stores'
    const id = $page.params.id

    export let data;
    let articles = data?.data.data;
    
    let article = articles.filter((art)=>(art.id === +id))

</script>

<div class="h-screen bg-gray-200">
    <div class=" flex flex-col container p-2 bg-white mx-auto mb-8 w-2/3 relative space-x-5 rounded-lg shadow-xl ">
        <div class="absolute w-12 h-12 bg-blue-800 text-white -top-5 -left-3 text-center mx-auto">
            <p class="text-2xl pt-1">{article[0].attributes.rating}</p>
        </div>
        <div class="p-5">
            <h3 class="text-2xl leading-normal font-bold">{article[0].attributes.title}</h3>
            <small>Console review</small>
            <p class="p-5">{article[0].attributes.body}</p>
        </div>
        <div class="mb-1 pl-5">
            <p>
                <a href="/" class="hover:underline-offset-2 hover:decoration-dotted hover:decoration-1
                hover:text-blue-800 hover:underline hover:decoration-blue-800">
                Home
                </a>
            </p>
        </div>
    </div>
</div>