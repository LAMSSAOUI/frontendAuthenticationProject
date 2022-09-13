import React from 'react'

const Hero = () => {
  return (
<div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src="https://placeimg.com/260/400/arch" class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">Box Office News!</h1>
      <p class="py-6 max-w-xl mr-44">Provident cupiditate lorem voluptatem et de in. Quaerat avec fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary bg-black">Get Started</button>
    </div>
  </div>
</div>
  )
}

export default Hero