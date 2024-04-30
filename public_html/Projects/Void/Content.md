# Void - Game Engine

The Void game engine is an engine I made for my exchange program (Game Development - Advanced Programming) at Fanshawe College in Canada. Throughout the program, we had to build an engine from scratch and keep expanding it with new features based on the information gained from the classes. Working under tremendous pressure to constantly integrate new features forced me to create a reasonably elaborate and functional engine in less than four months.

## Behind the screens
Although I've always been fascinated by (rendering) engines and intrigued by the sheer size of engine codebases and their functionality, I could never find the time to create one myself. When I got the opportunity to study the ins and outs of game engines abroad, I didn't hesitate for a second and decided to go.  

One month before going to Canada, I had no experience with C++ or OpenGL. In that window, I followed the learnopengl.com 'course' and learned the basics of C++ through the learncpp.com website. Although following the program without prior knowledge was risky, it would allow me to learn a lot quickly and potentially make me even more excited about rendering and engine development. 

Continuously expanding the engine while maintaining a solid structure posed a unique challenge. It required a delicate balance between adding new features and ensuring the existing codebase remained robust and maintainable. Each new feature had to integrate seamlessly with the existing architecture, avoiding introducing bugs or performance bottlenecks, meaning having to learn new information, environments, and structures within no time. 

Although the engine is far from optimal, bug-free, or robust, it taught me a lot about rendering, optimization, structures, and more. This project also taught me a lot about my own strengths and weaknesses and made me even more enthusiastic about engine development, so the project is a success in my books.

## Inside the engine
Within the Void Engine, various modules can be found, each serving a unique purpose and contributing to the engine's overall functionality. 

### Rendering:
Arguably, the most crucial aspect of games is rendering. The Void Engine uses the OpenGL rendering API since it's the most accessible and well-documented API at the moment, which is perfect for a first engine. I used a low-level abstraction to hide the implementation, created a simple rendering pipeline that uses batching, and used ASSIMP to import models and textures. Initially, I wanted to use abstraction to be able to switch rendering APIs as a cool extra. This was before I knew not all rendering APIs work as OpenGL, making low-level abstraction the wrong approach. 

### ECS
Instead of the commonly used GameObjects approach, I wanted to try ECS. I've tried to create an ECS implementation myself but had to resort to ENTT due to a lack of stability and time. The ECS also uses abstraction to hide the implementation, allowing me to easily switch between ENTT and my own implementation if necessary. 

### JSON parsing
To create scenes without hardcoding them into the engine, I used external JSON files to read and write scene information. When loading a JSON scene file, the content would be read by the scene manager, who could create entities and assign them the correct values. When writing a JSON scene file, the scene manager would collect all the entities in the scene, collect their data, and write them into a JSON file.

### Visual Editor
Since creating scenes was the most common exercise, creating a visual editor would significantly improve efficiency compared to editing JSON scene files manually. For this, I've used the ImGUI and ImGUIZMO libraries to create a Unity-inspired visual editor, as seen below. 

