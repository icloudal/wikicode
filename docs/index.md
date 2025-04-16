---
hide:
  - navigation
  - toc
---

<meta name="viewport" content="width=device-width, initial-scale=1">

<video autoplay muted loop playsinline id="bg-video">
  <source src="../assets/images/testvideo.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>



<style>
.flex-container {
  display: flex;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 2rem;
}

.flex-container img {
  max-width: 220px;
  border-radius: 10px;
  margin-right: 20px;
}

.flex-text {
  max-width: 500px;
  color: #b3b1b1; /* Asegura que el texto sea blanco */
  box-shadow: 0 2px 30px rgba(255,255,255,1);
  border-radius: 10px;
  padding:30px;
  margin-top: 100px;
  background-color: rgba(44,48,48,0.85);
}

@media screen and (max-width: 568px) {
    .flex-container {
      flex-direction: column;
      text-align: center;
      padding: 2rem;  /* Añadir padding extra en móviles */
      max-width: 90%;  /* Estrechamos la tarjeta al 90% del ancho */

    }

    .flex-container img {
    display: None;
    }

    .flex-text {
      padding: 0 1.5rem;  /* Añadir más padding en los lados */
    }
  }

</style>

<div class="flex-container">
  <img src="assets/images/html.gif" alt="Foto-test">
  <div class="flex-text">
    <h2>👋 Welcome to <strong>Wikicode!</strong></h2>
    <p><strong>Wikicode</strong> is your go-to technical wiki for solving all kinds of  
    coding challenges, system errors, and essential configurations.</p>

    <p>Whether you're dealing with tricky <strong>Windows</strong> issues, common <strong>Linux</strong> commands,  
    or debugging your code — we’ve got you covered.</p>

    <p><strong>💡 Clear solutions. Practical examples. Always up to date.</strong></p>

    <p>👷‍♂️ <em>Hang tight! We’re building something awesome. The site will be <strong>live very soon</strong>!</em></p>

  </div>
</div>

