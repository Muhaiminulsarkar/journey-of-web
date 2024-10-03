

// fetch,load and show categories on html

//create load categories


const loadCategories = () => {
    //   fetch the data
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json())
        .then(data => displayCategories(data))
        .catch(err => console.log(err))

}


// create display categories

const displayCategories = (data) => {
    console.log(data.categories[0].category)
}

loadCategories()