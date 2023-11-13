<template>
    <div id="kanyeQuote" class="DIVglass">
        <blockquote>
            <p id="Kanyetext"></p>
            <footer> Kanye West</footer>
        </blockquote>
    </div>
</template>

<script>
    export default {
        name: 'KanyeQuote',
        data() {
            return {
                quote: ''
            }
        },
        mounted() {
            this.getQuote();
        },
        methods: {
            getQuote() {
                fetch('https://api.kanye.rest')
                    .then(response => response.json())
                    .then(data => {
                        this.quote = data.quote;
                        document.getElementById("Kanyetext").innerHTML = "\""+this.quote+"\"";
                        document.getElementById("Kanyetext").style.fontStyle = "italic";

                    })
                    .catch(error => console.error(error))
            }
        }
    }
</script>

<style scoped>



#kanyeQuote{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
    padding: 10px;
    font-size: 1.5em;
    text-align: center;
    color: #ffffff;
    word-wrap: break-word;
}


</style>