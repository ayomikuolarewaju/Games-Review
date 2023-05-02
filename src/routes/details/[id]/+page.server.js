

export const load =async()=>  {
    
        const resp = await fetch('http://127.0.0.1:1337/api/reviews');
        const data = await resp.json();
    return{ 
        
        data
    }
}