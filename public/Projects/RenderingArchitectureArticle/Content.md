# Structural Frameworks and Optimization Techniques in Rendering Engines

## Summary
In this article, we’ll look at the structure behind a rendering engine following the SOLID principles, aiming to create a simplified rendering engine with a modular and easily expendable codebase. To get a good understanding of the content of the article, a good understanding of the basics of rendering is advised. We’ll look at multiple problems and their solutions while discussing alternate approaches and improvements. We’ll look at creating an external library and entry point to make the codebase easily reusable, ways to integrate the rendering API effectively, and design patterns used to support multiple external libraries at once. We also discuss approaches for creating an asset manager that is adjusted to the article’s scope and alternative improved and optimized ways to create one. In the final part of the article, we’ll discuss some essential aspects of the rendering pipeline and how to take these aspects into account when creating a rendering pipeline. We aim to create a simple scene with basic lighting, asset importing, and a skybox.

## Introduction
Since the dawn of computers, video games have taken the entertainment market by storm. From the bare beginnings with arguably one of the most well-known games, Pong, to the most visually stunning games released today, it’s fair to say video games have come quite far. Video games have also become increasingly complex, which can be great for users but creates a big challenge for developers. More complex games mean bigger codebases; Bigger codebases mean well-considered structures and thoughtful decisions; And well-considered structures and thoughtful decisions mean knowledge of bigger codebases, design patterns, and software structures.

From the cooperation of multiple modules while following the SOLID principles to the easy-to-use interface while still maintaining acceptable performance, it’s fair to say that creating a big, well-structured codebase is nothing short of a challenge. A lack of in-depth documentation and tutorials on bigger codebases also doesn’t help solve this problem. Even though the ability to write bigger codebases comes with the experience of writing smaller codebases and iteratively increasing the size of these projects, recognizing patterns and ways to increase code quality can increase the speed of improvement significantly.

This article aims to help developers improve their software design, specifically rendering engines, by creating a rendering engine from scratch, motivating design choices, and discussing alternative strategies for solving a certain problem. Because visualization is challenging while talking about structure and code design, there will be heavy use of UML diagrams and code snippets where applicable.

## Implementation
### Project type
Ideally, an engine has a reusable codebase that applies to various projects, be it a rendering, game, or audio engine. Software should be able to utilize this engine without being amalgamated into the codebase. Instead, it should be an external library linked to the software, accessed through an engine-specific interface. This encapsulates all the functionality-specific logic, allowing users to focus on content creation without thinking about actual implementation. Our rendering engine should thus contain both a rendering implementation and an interface to communicate.

External libraries come in two types: static and dynamic libraries. Although this doesn’t significantly affect the rendering engine’s overall codebase, it’s good to consider your engine’s possibilities and limitations. Considering a project type early can save time and allow us to consider possible structural changes in the design phase.

A static library (LIB) is a static codebase that gets compiled into our project when compiled. This allows us to access the codebase and utilize its functionality easily. Since we’re directly fusing the library into our project, the compiler will copy and paste code from the library into our project where necessary, which can lead to duplicate code. The dynamic library (DLL) is primarily focused on dynamic codebases and tries to solve the code duplication drawback. The premise of the DLL is that, instead of compiling the library directly into our project, it can be run by mapping it into our program as it is loaded into memory. This makes sure we only use a single copy of the library at any point, saving memory. Additionally, it allows us only to load specific libraries, saving additional memory. One downside of a DLL is that we have to make sure a copy of the dynamic library is installed on every machine your program runs, which creates its own set of problems. (DLL And LIB Files – What and Why?, n.d.)

Since our engine will be a static codebase, all functionality will be used, and the duplication of code won’t have a significant impact, it is not surprising that we opted for a static library engine.

### Entry point
While maintaining the separation between the two codebases, we still need a way to communicate. A conventional approach is to treat the library as precisely that—a library. Accessing the library involves calling a function that executes the requested action. This way, our project retains control over its lifespan while the library follows its commands.


Figure 1: Entry point implementation.
Another interesting approach, and the one used in the project because it’s primarily used in rendering engines, involves handing the project’s lifespan over to the engine. Often, lifetime exhibits a degree of uniformity across projects, resulting in boilerplate code. By incorporating this into the engine itself, rather than leaving it to the user, the setup process becomes more straightforward and less susceptible to errors. One way to implement this is shown in Figure 1, where the Application and EntryPoint classes are part of the engine and the SandboxApplication part of the user’s software. By defining the CreateApplication to return a pointer to the SandboxApplication, the engine will create an instance of the SandboxApplication class, employing that as a starting point.

The Application class could also seamlessly serve as a nexus for various types of functionality, such as an event system, which could allow the user’s projects to listen to events without resorting to polling.

### Rendering API
To display graphical content on the screen, we have to create a window and visualize data, also known as ‘rendering.’ To accomplish this, we use a rendering API. While there are generic rendering APIs that work on most platforms, most rendering APIs are optimized for specific platforms, which provides better performance but also limits their usefulness. In this article, we’ll use OpenGL, a rendering API that works on most platforms, is accessible, and has a lot of documentation. It allows us to visualize graphical content and experiment with the functionality easily and quickly.

While using the rendering API, you can quickly notice that these APIs offer a lot of functionality. This gives us a huge playing field to create and experiment with, but it also makes it difficult to remember all the syntax and use it consistently. Not only can this be hard to maintain, but it also allows bugs to appear more easily throughout your project, especially when working with multiple developers. Ultimately, the other developers shouldn’t have to worry about the implementation of the rendering API and should be able to communicate with it through a simplified interface. Our approach to solving this problem depends on the amount of different APIs we’re planning to support.

#### Single API
When using a single API, we can completely focus on the specific API we’re using and build an interface around that. This could be done by combining API logic and putting it in a class that is easier to work with and understand. Since we only have to focus on a single API, we can focus on low-level logic with the creation of classes, something that’s more difficult when managing multiple APIs. It also adds the benefit of being able to make full use of the API’s capabilities since we don’t have to generalize our interface.

Examples of these classes are an index buffer, vertex buffer, vertex buffer layout, and vertex array class. All these classes result from combining multiple lines of modular API code, which we can shape to our liking. Wrapping these with a method and changing the properties based on the method’s argument will make them easier to understand and work with. Take the following code snippet as an example and compare it with the function we call instead. Calling the function improves the readability and reduces the likelihood of errors.

``` cpp 
	OpenGLIndexBuffer::OpenGLIndexBuffer(const uint32_t* vertices, const uint32_t size)
	{
		glGenBuffers(1, &m_ID);
		glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, m_ID);
		glBufferData(GL_ELEMENT_ARRAY_BUFFER, size * sizeof(uint32_t), vertices, GL_STATIC_DRAW);
	}

```    

#### Multiple APIs
If you’re planning to support multiple APIs, it is suggested that you at least have a basic knowledge of how they both work and their differences. Understanding their differences and similarities makes it easier to support them both in the same application.

To effectively support multiple APIs, we have to find a way to write code that allows us to use both APIs. This means that the user doesn’t have to rework the entire project to make it work with another API. We have to find a way to make our code abstract.

Creating something like that is called abstraction. Abstraction eliminates the need to have knowledge of the implementation in order to use a specific functionality. As mentioned in Thorben’s article, “Making coffee with a coffee machine is a good example of abstraction. You need to know how to use your coffee machine to make coffee. … You don’t need to know the ideal temperature of the water or the amount of ground coffee you need to use. Someone else worried about that and created a coffee machine that now acts as an abstraction and hides all these details. You interact with a simple interface that doesn’t require any knowledge about the internal implementation.” (Janssen, 2024)



Figure 2: The left shows an implementation without abstraction. The right shows an example of an implementation with abstraction.
The idea is to create an abstract class that will serve as the simplified interface for the rest of the project and an implementation class that derives from this abstract class. As the code snippet below illustrates, the abstract class will contain a Create function backed by a factory pattern that determines which implementation class instance is returned. The project calls a function from the abstract class and doesn’t have to care about the implementation. This becomes especially useful when multiple implementation classes are inherited from the abstract class. The difference between abstracted code and non-abstracted code is shown in Figure 2, with an external library as an example.

``` cpp
Foo* Foo::Create()
{
#ifdef Implementation1
   return new Implementation1Foo();
#elif Implementation2
   return new Implementation2Foo(indices, size);
#elif Implementation3
   return new Implementation3Foo(indices, size);
#else 
   return nullptr;
#endif
}
```

In the code snippet, we use the define directive functionality (a.k.a. Macros) found in C/C++. This adds the benefit of being able to define a global variable, which determines which implementation we’ll be using. When an if statement of the define directive doesn’t resolve in True, the compiler will automatically strip the code in the if condition. The code that will be stripped out is also greyed out in the editor. (TylerMSFT, 2021)

Due to potential differences between APIs, the advice is to use a high level of abstraction. This helps improve the code quality and performance per API. Some APIs are so different that low-level abstraction is close to impossible. An example of a high-level abstracted class is a Model class. The logic behind the model could be different across APIs. Still, the end product is the same.

Note: Even though we’re planning to use a single API in this project, the decision was made to use a form of abstraction in the codebase, meaning that abstraction was used but on a low level instead of the suggested high level. Besides the overhead of programming, implementing abstraction has no significant impact on the engine’s performance. This decision was made to learn about the possibilities and inner workings of abstraction so that we could apply it in later projects.

### Asset management
After implementing the rendering logic, we should be able to prepare simple assets for rendering by writing positions in the vertex buffer, providing the index buffer of the draw order, combining these two buffers in a vertex array, and adding a shader to the draw call. This should be enough when rendering simple shapes, but providing the program of model- and texture data by hardcoding it into the engine is tedious and limits the engine’s flexibility.

Of course, the solution is to allow the import and usage of external models and other assets in the engine. Since this directly links to something like the vertex buffer or texture class, it may be tempting to put the importing code into these classes, but in reality, the vertex buffer or texture class shouldn’t care where the data they’re holding comes from. Following the Separation of Concerns (SoC) guidelines, we should separate these two types of functionality and create a separate class for the import of assets.

We could create a library structure in which each asset type has a corresponding library containing asset-specific data, which we can load into memory, store in the library, and retrieve on request. An example can be found in Figure 3. Here, we could also make use of a file manager to check whether a certain file exists, create files, read and write, and perform other potential functions.


Figure 3: Simple asset manager system.
This is more than suitable for the current scope, so this is the approach taken in the codebase. We don’t have to care much about duplicate asset data in memory or not having a manageable centralized asset manager. However, the search for potential alternatives never hurts someone.

If you follow the SoC really carefully, you could say the libraries are still doing multiple things. They import, process, and store the asset data. We could also argue that there are circumstances where two libraries use the same set of data but, due to not being able to communicate, will both load the data into memory themselves, resulting in duplicate data in memory. A solution to this problem is the addition of a centralized asset manager between the FileManager and the independent libraries, which will serve as the importer and memory manager, while the libraries will function as interpreters and access points for the rest of the project. This concept is illustrated in Figure 4.


Figure 4: Asset libraries making use of a centralized asset manager.
Ideally, we should only be able to communicate with the centralized asset manager through the individual libraries, both for safety and ease of use. We could make the centralized asset manager a singleton, but this defeats the idea of not being able to access it. Instead, we could look at dependency injection when the project starts up. Since that deviates too much from the current topic, I’ll add a link to an article that summarizes the concept of dependency injection pretty well at the end of this article.

### Rendering Pipeline
Arguably, one of the most important and challenging parts of a rendering engine is the rendering pipeline. Building your own pipeline grants you the freedom to form it to your liking and adjust it based on the scope of the project, but it comes with a fair challenge: the structure. Performance-wise, there is a lot of ground to be won, but also a lot to lose. Even though the rendering pipeline can vary massively, we can look at how to create a simple renderer, containing some optimization techniques and a modular structure.

The most straightforward pipeline can be created as a rendering class. Here, we can create a function called Render, supply it with the model, shader, and textures, and make the function render the data to the window. Depending on the scope of the project, this might be suitable, but you will soon find its limits. One major drawback is that every time we call Render, we create a draw call, which is not an issue with a small number of draw calls but can impact performance massively when trying to render a couple dozen models.

#### Batching
A common solution is batching. Batching is the act of combining mesh data into a single mesh and drawing that to the window. The advantage is the reduction in draw calls, improving the overall performance of our rendering pipeline. (Krzeminski, 2014)


Figure 5: Simple batch structure.
At the moment, we render our models immediately to the window. If we’re planning to use batching, we need to rethink this approach. Since batching requires us to sort our models based on their shader, we need to store the render requests in a list so we can access them when we’re planning to batch the models. Instead of creating a function called ‘Render,’ we can create a function called ‘Submit’ that submits the render request to the batcher, which will store all the requests in a list until the batch function is called. After batching, we request the batches from the batcher and create draw calls with these batches. This process is illustrated in Figure 5.

Batching comes in multiple forms, but all have the same goal: reducing draw calls. A couple of examples are general batching, as displayed above; static batching, which keeps track of static objects and caches their properties to increase render performance; and instance batching, which collects all the same models and batches, turns them into an instanced batch and uses GPU instancing to render them with high performance. All of these use the same structure but a different implementation. We can also use batching to gather models that use blending effectively, sort them from back to front, and render them in a different render pass in order to achieve transparent and opaque renders.

#### Lighting
Our renderer also needs to be able to send data about the scene to shaders before rendering. Think about information regarding lighting, a camera, and a potential skybox. Since we’re already using batching, we can easily integrate shader uniform management into our rendering pipeline.

First, we need to store the information in our renderer, for which we can use a basic struct. Since the skybox, camera, and directional light are single objects, we can create set functions for these in the renderer. For point lights, we can add a SubmitPointLight function, which stores the point lights in a list. Before we make a draw call, we can set all the data via shader uniforms and send them to the shader.

For the current scope, this is great, but sending the same data to different shaders, multiple times per frame can have a significant performance impact. Instead, since the data is the same throughout the frame, we can create a static buffer called a Uniform Buffer Object. This is a buffer we upload to the GPU once a frame, map to the shaders, and use as read-only variables in the shader. Instead of setting multiple shader uniforms per shader, we can set a single uniform and link to all the data we’ve put into the buffer.

Combining all these techniques, we are able to create a simple scene effectively backed by ith a solid code structure. Although it might not seem like much, we can easily expand upon this codebase and add new modules and rendering techniques.


Figure 6: Final render complete with simple lighting, model importing, and a skybox.
## Conclusion
With this codebase, we can render imported assets to any Windows-operated window, complete with a simple lighting model and a solid base to expand upon easily. We can write our own shader logic to make custom visuals and play around with some of the rendering pipeline settings. We’ve also looked into some commonly used structural patterns, which we’ve used to improve the readability and quality of the codebase. We’ve also looked into some interesting improvements and alternatives for some of our implementations, which should give you a headstart with creating your own rendering engine or even a game engine.

Keep in mind that there is no such thing as a perfect way to design and structure a rendering engine. With that being said, remember that the approach that’s taken in this article is not the ideal way to structure an engine, but more of an example of how it could be structured with the requirements kept in mind. When creating a rendering engine, make sure to list the requirements and create an engine to meet these requirements. Don’t focus too much on what the engine should maybe do somewhere in the future, especially when just starting out in the field of engine development.

If you find yourself wanting to learn more about everything that drives rendering, rendering engines, and/or game engines, the following books should be amazing to keep you going:

**Game Engine Architecture – Jason Gregory**: In this book, Jason Gregory gives insights on the core structure of creating a rendering engine, complete with the challenges and solutions used in one of the biggest game development companies: Naughty Dog.

**GPU Gems 1, 2, & 3**: This line of books contains articles from NVidia developers about techniques and optimization focused on rendering. Even though the level of these books might be a bit high, it is still amazingly interesting to see how commonly used rendering effects are achieved.

**Real-Time Rendering**: This book explains everything about rendering, from the calculations to accessible rendering techniques and the structure behind them. This book might be a bit more beginner-friendly than the GPU gems series, but it will ramp up in difficulty pretty quickly.

## Sources
[Krzeminski, M. (2014, November 23). OpenGL Batch Rendering. GameDev.net.](https://www.gamedev.net/tutorials/programming/graphics/opengl-batch-rendering-r3900/)

[Gregory, J. (2018). Game Engine Architecture, Third Edition. In A K Peters/CRC Press eBooks.](https://doi.org/10.1201/9781315267845)

Fernando, R. (2004). GPU Gems: Programming Techniques, Tips and Tricks for Real-Time Graphics.

Pharr, M., & Fernando, R. (2005). GPU Gems 2: Programming Techniques for High-performance Graphics and General-purpose Computation. Addison-Wesley Professional.

[Janssen, T. (2024, February 28). OOP Concept for Beginners: What is Abstraction? Stackify.](https://stackify.com/oop-concept-abstraction/)

[Rojtberg, P. (n.d.). OGRE – Open Source 3D Graphics Engine. OGRE – Open Source 3D Graphics Engine.](https://www.ogre3d.org/)

[TylerMSFT. (2021, August 3). #define directive (C/C++). Microsoft Learn.](https://learn.microsoft.com/en-us/cpp/preprocessor/hash-define-directive-c-cpp?view=msvc-170)

[DLL and LIB files – what and why? (n.d.). Stack Overflow.](https://stackoverflow.com/questions/913691/dll-and-lib-files-what-and-why)

[LearnOpenGL – Advanced OpenGL. (n.d.).](https://learnopengl.com/Advanced-OpenGL)

[Morterud, C. (2018, September 7). Dependency injection in C++. A Dependency Injected.](https://www.codymorterud.com/design/2018/09/07/dependency-injection-cpp.html)