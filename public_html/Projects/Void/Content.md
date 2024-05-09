# Void - Rendering Engine

The Void game engine is an engine I made for my exchange program ([Game Development - Advanced Programming](https://www.fanshawec.ca/programs/gdp1-game-development-advanced-programming/next)) at Fanshawe College in Canada. Throughout the program, we had to build an engine from scratch and keep expanding it with new features based on the information gained from the classes. Working under tremendous pressure to constantly integrate new features forced me to create a reasonably elaborate and functional engine in less than four months.

![Something](/Projects/Void/FirstRender.png)
> **Figure 1**: Scene made for the 'Graphics' class's midterm.
<br><br>
<hr>
<br>

## Behind the screens
Although I've always been fascinated by (rendering) engines and intrigued by the sheer size of engine codebases and their functionality, I could never find the time to create one myself. When I got the opportunity to study the ins and outs of game engines abroad, I didn't hesitate for a second and decided to go.  

One month before going to Canada, I had no experience with C++ or OpenGL. In that window, I followed the learnopengl.com 'course' and learned the basics of C++ through the learncpp.com website. Although following the program without prior knowledge was risky, it would allow me to learn a lot quickly and potentially make me even more excited about rendering and engine development. 

Continuously expanding the engine while maintaining a solid structure posed a unique challenge. It required a delicate balance between adding new features and ensuring the existing codebase remained robust and maintainable. Each new feature had to integrate seamlessly with the existing architecture, avoiding introducing bugs or performance bottlenecks, meaning having to learn new information, environments, and structures within no time. 

Although the engine is far from optimal, bug-free, or robust, it taught me a lot about rendering, optimization, structures, and more. This project also taught me a lot about my own strengths and weaknesses and made me even more enthusiastic about engine development, so the project is a success in my books.
<br><br>
<hr>
<br>

## Inside the engine
Within the Void Engine, various modules can be found, each serving a unique purpose and contributing to the engine's overall functionality. Modules like an **ECS implementation** to allow for efficient update loops, an FMOD integration to **play audio**, **model importing** with ASSIMP, and an **External library and configuration manager** with Premake5. Other bigger modules are mentioned below.
<br><br>

### Rendering
Arguably, the most crucial aspect of games is rendering. The Void Engine uses the OpenGL rendering API since it's the most accessible and well-documented API at the moment, which is perfect for a first engine. I used a low-level abstraction to hide the implementation, created a simple rendering pipeline that uses batching, and used ASSIMP to import models and textures. Initially, I wanted to use abstraction to be able to switch rendering APIs as a cool extra. This was before I knew not all rendering APIs work as OpenGL, making low-level abstraction the wrong approach. 

<div class="contentRow">
  <div>

  ![Spaceport Render](/Projects/Void/SpaceportRender.png)
  > **Figure 2**: 'Graphics' class exercise around the mid-term.

  </div>
  <div>

  ![Spaceport Render](/Projects/Void/AudioRender.png)
  > **Figure 3**: Combined exercise for the 'Graphics' and 'Audio' class around the mid-term.

  </div>
</div>
<br><br>

### JSON parsing
To create scenes without hardcoding them into the engine, I used external JSON files to read and write scene information. When loading a JSON scene file, the content would be read by the scene manager, who could create entities and assign them the correct values. When writing a JSON scene file, the scene manager would collect all the entities in the scene, collect their data, and write them into a JSON file.

Combining this with our visual editor allowed us to easily create different scenes and switch between them when necessary. Manually changing the JSON files to create a scene was no longer necessary, which sped up the development of scene significantly. An example of adjusting the scene, saving and loading can be found in Figure 4. 

<video controls width="100%">
  <source src="/Projects/Void/EditorShowcase.mkv" type="video/mp4">
</video>

> **Figure 4**: Scene changing and saving showcase.
<br><br>

### Visual Editor
<div class="contentRow">
<div>
Since creating scenes was the most common exercise, creating a visual editor would significantly improve efficiency compared to editing JSON scene files manually. To create a visual editor, I've used the ImGUI and ImGUIZMO libraries to create a Unity-inspired visual editor, as seen in Figure 6. 
<br><br>
In here, seperate windows can be opened and closed on demand. The three most used windows are showed in Figure 6: The scene hierarchy, the scene view and the inspector window. Different component can be added to entities, each showing up in the inspector and allowing the user to change their corresponding variables.
</div>
<div class="R">

![Editor](/Projects/Void/Inspector.png)
> **Figure 5**: Inspector window.

</div>
</div>

![Editor](/Projects/Void/Editor.png)
> **Figure 6**: Void's visual editor. Showing the scene hierarchy on the left, scene view in the middle and the inspector on the right.
<br><br>

### Physics solution
The course required our engine to be able to simulate physics simulations. Third-party physics libraries were not allowed, forcing us to create a physics solution ourselves. The physics solution developed for the Void Engine contains collision triggers and handlers for cube, sphere, mesh, and plane colliders. Covering the most common colliders creates the opportunity to create simple but exciting simulations. Opting to skip out on the AABB physics approach, I made more realistic but less optimized simulations, creating the simple simulation as seen in Figure 7.

<video controls width="100%">
  <source src="/Projects/Void/PhysicsShowcase.mp4" type="video/mp4">
</video>

> **Figure 7**: Simple physics simulation made in the Void Engine.
<br><br>
<hr>
<br>

The codebase of the engine can be found in the [Void Github Repository](https://github.com/TJJonker/Void). I've learned a lot and loved working on this project, but I will no longer contribute to this codebase. Since the codebase no longer works, I shared several videos showcasing some of the projects I've made in the engine beneath. These are project submissions where I showcase and explain the project and which goals the project must meet.


<div class="video-container">
  <iframe src="https://www.youtube.com/embed/kqsfv58cwn0" frameborder="0" allowfullscreen></iframe>
</div>

> **Figure 8**: First scene created without the visual editor. Showcasing model importing and a Phong lighting model.

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/lMWSbyFV3qk" frameborder="0" allowfullscreen></iframe>
</div>

> **Figure 9**: First scene created with the visual editor. Showcasing more interesting model placement, blending and texture animations.

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/O63d6VCCajE" frameborder="0" allowfullscreen></iframe>
</div>

> **Figure 10**: Final scene created in a small amount of time, recreating a given scene to see how quick a scene can be build.