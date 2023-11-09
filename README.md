<img src= "https://github.com/mykeTheArchAngel/3D_webDev_V1/assets/10962678/a7f3b4bb-af6f-49a5-8b69-943c9b1def5f)" alt="project175" width="500"/>

Requirements:

    Node.js
    VS Code , 
    Blender ,  Blender to Web

Resources:

    Flying Apartment Asset
    React Three Fiber: Three.js Renderer
    Drei: React Three Fiber Helpers
    Three.js: 3D Engine
    Vite: Static Web Server
    CodeSandbox: Online Prototyping Container (optional)

Installation

npm install

Getting Started

    Open a model in Blender you want to publish (places like CG Trader are a good start)
    Export to public/model.glb

    open a terminal to /src directory
    run npx gltfjsx ../public/model.glb
    rename the new Model.js to Model.jsx
    run npm run dev from terminal
    look at what you did, tune and repeat

Scripts

npm run dev
npm run build
npm run preview
npm run sandbox

detailed notes for Blender -> Web3D
Models

    Import your model 
    Models CAN be created progmatically if that makes sense to do.
    Models can come from multiple files
    test things with gltf export NOT glb
    Split parts
        by whats separate
        by materials
        select faces + more technique
    Reduce geometry
        Remove unnecessary components for 3d printing
        highlight and dissolve unnecessary vertices
        limited dissolve intricate parts
    join parts and set origins logically for use later
    rename parts to what's easy to recognize
    parent objects based on what needs to move together
    add materials (detailed separately)
    add lights (detailed separately)

Materials

    Materials in Blender
    UVs
        bulk script on Gist
    GLTF export materials
    BSDF Material
    Baking Materials
    Materials in R3F
        Special materials
        Cloning
        Modifying
        Unique capabilities

Lighting

    more lights == slower performance
    use '-s' in gltfjsx transform
        include drei Instances if using -i
    add these properties to each light: castShadow shadow-mapSize={[2048, 2048]} shadow-bias={-.0000001} in Model.jsx
    adjust intensity values and shadow-bias
    add castShadow receiveShadow to instance Merged tag in Model.jsx

Animating

    useFrame lerp https://medium.com/@zmommaerts/animate-a-camera-in-react-three-fiber-7398326dad5d
    Theater js https://www.theatrejs.com/
    useAnimations:
        naming is everything!
        NLA tracks are a pain
        can group virtually
        onClick interactions
        play forward and backward.
    Spring https:/docs.pmnd.rs/react-three-fiber/tutorials/using-with-react-spring
    Drei Animations

