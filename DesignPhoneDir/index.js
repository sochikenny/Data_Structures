//Design a Phone Directory which supports the following operations:
//get: Provide a number which is not assigned to anyone.
//check: Check if a number is available or not.
//release: Recycle or release a number.
// Init a phone directory containing a total of 3 numbers: 0, 1, and 2.
//PhoneDirectory directory = new PhoneDirectory(3);
//------------------------------------------------------
// It can return any available phone number. Here we assume it returns 0.
//directory.get();
//-------------------------------------------------------
// Assume it returns 1.
//directory.get();
//-------------------------------------------------------
// The number 2 is available, so return true.
//directory.check(2);
//-------------------------------------------------------
// It returns 2, the only number that is left.
//directory.get();
//--------------------------------------------------------
// The number 2 is no longer available, so return false.
//directory.check(2);
//--------------------------------------------------------
// Release number 2 back to the pool.
//directory.release(2);
//--------------------------------------------------------
// Number 2 is available again, return true.
//directory.check(2);

class PhoneDirectory{
    constructor(maxNumbers){
        this.directory = new Set()
        this.buildDirectory(maxNumbers)
    }
    get(){
        if(!this.directory.size){
            return -1
        }
        let nextAvailable = this.directory.values().next().value()
        this.directory.delete(nextAvailable)
        return nextAvailable
    }
    check(number){
        this.directory.has(number)
    }
    release(number){
        this.directory.add(number)
    }
    buildDirectory(n){
        for(let i = 0; i < n; i++){
            this.directory.add(i)
        }
    }
}

// let phoneDirectory = new PhoneDirectory(3);
// console.log(phoneDirectory)
// console.log(phoneDirectory.check())
