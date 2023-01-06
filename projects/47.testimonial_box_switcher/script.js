const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
    {name:'Mario Bross', position:'Data Eng', photo:'https://source.unsplash.com/random/500x500/?1', text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'},
    {name:'Master Jisowc', position:'Fisherman', photo:'https://source.unsplash.com/random/500x500/?2', text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'},
    {name:'Osho Tararira', position:'Data Entry', photo:'https://source.unsplash.com/random/500x500/?3', text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'},
    {name:'Aquiles Brinco', position:'Musician', photo:'https://source.unsplash.com/random/500x500/?4', text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'},
]

let idx = 1

function updateTestimonial() {
    const { name, position, photo, text } = testimonials[idx]

    testimonial.innerHTML = text
    userImage.src = photo
    username.innerHTML = name
    role.innerHTML = position

    idx++

    if(idx > testimonials.length - 1) {
        idx = 0
    }
}

setInterval(updateTestimonial, 10000)