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
                        //put it in italics
                        document.getElementById("Kanyetext").style.fontStyle = "italic";

                    })
                    .catch(error => console.error(error))
            }
        }
    }
</script>

<style scoped>


</style>