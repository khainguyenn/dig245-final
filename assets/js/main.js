/* javascript */
const images = document.querySelectorAll('.quiz-container img');
images.forEach(image => {
  image.addEventListener('click', () => {
    document.querySelector('.quiz-container').innerHTML = `
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. 
        Cras venenatis euismod malesuada. Sed commodo sodales urna ut aliquam. Etiam dictum turpis ac magna auctor 
        varius. Integer consequat pharetra erat, ac facilisis magna luctus eget. In hac habitasse platea dictumst. 
        Suspendisse potenti. Vestibulum varius, sapien at varius lacinia, ligula elit tincidunt lacus, eget tristique 
        nisi mi a elit. Morbi sed velit auctor, faucibus nisl sed, vehicula neque. Vivamus tincidunt dictum orci, sit 
        amet sollicitudin justo rhoncus non. Ut luctus, nunc id vehicula tincidunt, arcu ligula sagittis nulla, ac 
        posuere sapien sem nec nisi. Aliquam erat volutpat. Integer ornare nunc eget tellus feugiat, non dictum ipsum 
        efficitur. Nulla ac magna congue, porttitor purus sed, cursus odio. Suspendisse in diam et risus hendrerit 
        volutpat ut at metus.
        
        Phasellus imperdiet felis in diam aliquet, nec fringilla lectus suscipit. Integer ullamcorper suscipit justo, 
        ut feugiat metus venenatis sed. Quisque scelerisque lorem nec turpis eleifend eleifend. Aenean ac tortor nec 
        ligula dapibus pharetra. Vestibulum bibendum urna sit amet odio ornare feugiat. 
      </p>
    `;
  });
});


