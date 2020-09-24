console.log(
  "Lorem ipsum dolor sit amet consectetur adipiscing elit faucibus ullamcorper, inceptos rhoncus dignissim sodales nulla libero magnis tristique pharetra, penatibus hac class molestie diam enim eu curae. Sagittis odio dis feugiat dictum congue quam porta etiam ultricies, venenatis cubilia blandit eu aliquet vestibulum cursus auctor, massa libero tempus sociis arcu ad sodales elementum. Augue sagittis vestibulum massa phasellus, rhoncus commodo laoreet, dapibus nisi ornare. Sem senectus vulputate curae vehicula praesent placerat posuere, molestie himenaeos ultricies convallis interdum lacinia."
);

let respuesta1 = parseInt(
  window.prompt(`
    Elige una respuesta: 
    1 - Seguir adelante
    2 - Girar a la izquierda
    3 - Volver por donde has venido
`)
);

if (respuesta1 === 1) {
  console.log(`
    
    Has seguido adelante...

    Lorem ipsum dolor sit amet consectetur adipiscing elit faucibus ullamcorper, inceptos rhoncus dignissim sodales nulla libero magnis tristique pharetra, penatibus hac class molestie diam enim eu curae. Sagittis odio dis feugiat dictum congue quam porta etiam ultricies, venenatis cubilia blandit eu aliquet vestibulum cursus auctor, massa libero tempus sociis arcu ad sodales elementum. Augue sagittis vestibulum massa phasellus, rhoncus commodo laoreet, dapibus nisi ornare. Sem senectus vulputate curae vehicula praesent placerat posuere, molestie himenaeos ultricies convallis interdum lacinia.
    `);
} else if (respuesta1 === 2) {
  console.log(`
    Has girado a la izquierda...

    Lorem ipsum dolor sit amet consectetur adipiscing elit faucibus ullamcorper, inceptos rhoncus dignissim sodales nulla libero magnis tristique pharetra, penatibus hac class molestie diam enim eu curae. Sagittis odio dis feugiat dictum congue quam porta etiam ultricies, venenatis cubilia blandit eu aliquet vestibulum cursus auctor, massa libero tempus sociis arcu ad sodales elementum. Augue sagittis vestibulum massa phasellus, rhoncus commodo laoreet, dapibus nisi ornare. Sem senectus vulputate curae vehicula praesent placerat posuere, molestie himenaeos ultricies convallis interdum lacinia.
    
    `);
} else if (respuesta1 === 3) {
  console.log(`
  Has vuelto por donde has venido
  
  Lorem ipsum dolor sit amet consectetur adipiscing elit faucibus ullamcorper, inceptos rhoncus dignissim sodales nulla libero magnis tristique pharetra, penatibus hac class molestie diam enim eu curae. Sagittis odio dis feugiat dictum congue quam porta etiam ultricies, venenatis cubilia blandit eu aliquet vestibulum cursus auctor, massa libero tempus sociis arcu ad sodales elementum. Augue sagittis vestibulum massa phasellus, rhoncus commodo laoreet, dapibus nisi ornare. Sem senectus vulputate curae vehicula praesent placerat posuere, molestie himenaeos ultricies convallis interdum lacinia.
  `);
}
