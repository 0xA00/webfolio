<template>
  <canvas id="canvas1"></canvas>
</template>
<script>
import {onMounted, ref} from "vue";

export default {
    name: "FlowField"
}


import p5 from "p5";



document.addEventListener('DOMContentLoaded', function() {


    let canvas = document.getElementById('canvas1')


    let sketch = function(p){

        let w = window.innerWidth
        let h = 400
        let cols, rows
        let r, g, b


        let particles = [];

        let flowfield

        p.setup = function (){
            p.createCanvas(w, h,canvas)
            p.background(22,22,29)
            cols= p.floor(w/10)
            rows = p.floor(h/10)

            flowfield = new Array(cols * rows)
            for (let i = 0; i < 1750; i++){
                particles[i] = new Particle()
            }




        }
        class Particle{
            constructor(){
                this.pos = p.createVector(p.random(w), p.random(h))
                this.vel = p5.Vector.random2D()
                this.acc = p.createVector(0, 0)
                this.maxSpeed = 3
                this.prevPos = this.pos.copy();


            }

            update(){
                this.vel.add(this.acc)
                this.vel.limit(this.maxSpeed)
                this.pos.add(this.vel)
                this.acc.mult(0)
            }

            applyForce(force){
                this.acc.add(force)
            }

            show(){
                //take the horizontal position of the particle and divide it by the width of the canvas
                //then multiply it by 255 to get a value between 0 and 255
                //then floor it to get an integer
                //then map it to a value between 0 and 255
                r = p.floor(p.map(this.pos.x, 0, w, 0, 255))
                g = p.floor(p.map(this.pos.y, 0, h, 0, 255))
                b = p.floor(p.map(this.pos.x, 0, w, 255, 0))

                p.stroke(r, g, b)
                p.line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y)
                p.point(this.pos.x, this.pos.y)
                this.updatePrev()
                p.strokeWeight(1)

            }

            updatePrev(){
                this.prevPos.x = this.pos.x
                this.prevPos.y = this.pos.y
            }
            edges(){
                if (this.pos.x > w) {
                    this.pos.x = 0
                    this.updatePrev()
                }

                if (this.pos.x < 0) {
                    this.pos.x = w
                    this.updatePrev()
                }

                if (this.pos.y > h) {
                    this.pos.y = 0
                    this.updatePrev()
                }

                if (this.pos.y < 0) {
                    this.pos.y = h
                    this.updatePrev()
                }

            }

            follow(vectors){
                let x = p.floor(this.pos.x / 10)
                let y = p.floor(this.pos.y / 10)
                let index = x + y * cols
                let force = vectors[index]
                this.applyForce(force)
            }
        }

        p.draw = function (){
            p.background(0,0,0,20)
            let yoff = 0
            for (let y = 0; y < rows; y++){
                let xoff = 0
                for (let x = 0; x < cols; x++){
                    let index= x + y * cols
                    let angle = p.noise(xoff, yoff, p.frameCount/100)*p.TWO_PI*4
                    let v = p5.Vector.fromAngle(angle)
                    v.setMag(0.25)
                    flowfield[index] = v
                    xoff += 0.1
                }
                yoff += 0.1
            }
            for (let i = 0; i < particles.length; i++){
                particles[i].follow(flowfield)
                particles[i].update()
                particles[i].edges()
                particles[i].show()

            }

        }

    }

    let myp5 = new p5(sketch)

    //make responsive
    window.addEventListener('resize', function(){
        myp5.resizeCanvas(window.innerWidth, window.innerHeight)
    })
/*
    //change size when router changes
    window.addEventListener('router-view-change', function(){
        myp5.resizeCanvas(window.innerWidth, window.innerHeight)
    })*/
});


   



</script>

<style scoped>

#canvas1{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
}


    h1{
        font-size: 3em;
        margin-top: 10px;
    }
</style>