

const promiseFunction = (isError) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(isError) reject("incorrect response")
            resolve("Correct response")
        }, 1000)
    })
}

const asyncFunction = async() => {

    try {

        console.log("start")
    
        const result = await promiseFunction(true)
        console.log(result)
    
        console.log("end")
        return result

    } catch (error) {

        throw new Error(error)

    }
}

asyncFunction()
    .then(console.log)
    .catch(console.log)








