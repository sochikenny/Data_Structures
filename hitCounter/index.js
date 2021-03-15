class HitCounter {
    constructor(){
        this.queue = []
    }

    hit(timeStamp){
        this.queue.push(timeStamp)
    }

    getHits(timeStamp){
        let earliest = timeStamp - 300
        while(true){
            let first = this.queue[0]
            if(earliest >= first){
                this.queue.shift()
            }else{
                break
            }
        }
        return this.queue.length 
    }
}

let counter = new HitCounter()
counter.hit(1)
counter.hit(2)
counter.hit(3)
counter.hit(300)
console.log(counter.getHits(301))
