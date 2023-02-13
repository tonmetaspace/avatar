# TON Metaspace Avatar Maker

## How can I customize my avatar?
When you first enter the Metaspace, you can choose an avatar to represent yourself. You can choose one of the pre-made avatars or create your own. You can also set a display name that will be visible to everyone else in the room.

Get started quickly using one of these web based tools: [Quick Customized Avatars](https://github.com/tonmetaspace/avatar).

Depending on how involved you'd like to get in the avatar creation process, you might choose to simply 're-skin' one of the base avatar bodies, or upload your own 3D model.

## Customize your name
When you join a room, **the Name and Avatar** page will appear. The name will be selected for you automatically, you can change this name by clicking on this name field. Then select your avatar and then click ```Confirm``` to enter the room.

## How to choose your avatar
When you join a room, the Name and Avatar page will appear . Select **View avatars** to open the Avatar Browser, which will display various preset avatars.

If you have a Metaspace account, you can save your favorite avatars to My Avatars for easy access. Click the copy icon on the avatar selection screen to save the avatar.

When you have chosen your avatar, click the button ```Apply```

## To 're-skin' a duck or box bot avatar
The most straightforward way to customize an avatar for Metaspace is to upload a custom texture on one of the base ducs. To do this:

1. Enter a Metaspace.
2. Select the "People" list icon in the top right corner of the screen.
3. By your name, you will see a pencil icon. Click this icon to open the avatar selection screen.
4. Click the "Browse Avatars" button.
5. From here, you can see a list of your own avatars, the first spot should say "Create Avatar".
6. In the avatar customization screen choose one of the default body shapes.
7. Click "Base Map" and upload an image file. If you want to design a custom texture for the duck skin, see the details below.
8. Save the avatar.

## To create an avatar for Metaspace:
![image](https://user-images.githubusercontent.com/24755187/218436997-61013cd9-3fc9-4150-92fc-4425fc8cc09f.png)

1. Go to [https://github.com/tonmetaspace/avatar](https://github.com/tonmetaspace/avatar). The first avatar that you see will be a randomly generated avatar using different components that are available.
2. Have fun! You can mix and match different selections to give your avatar a unique look.
3. Download your avatar using the 'Export avatar' button.
4. Sign into a Metaspace
5. Select the "More" icon in the bottom right corner of the screen and click "Change Name and Avatar".
6. Click the "Change Avatar" button.
7. From here, you can see a list of your own avatars, the first spot should say "Create Avatar".
8. Click the link that says 'Custom GLB', found under the three default body shapes
9. Upload the .glb file that you saved to your computer
10. Save your avatar and enjoy your new look!

## Creating Accessories and Custom Components

You can create custom components for the avatar by modeling the object in blender. While you can upload any .glb file as an accessory, using the base template for an avatar built with this editor will ensure that the uploaded custom component sits in the correct place on the avatar. More information can be found in the [customization guide](./CUSTOMIZING.md).

## License
* Avatars: CC0
* Editor: [MPL-2.0 license](https://github.com/tonmetaspace/avatar/blob/main/LICENSE)

## About the editor

We invite the community to use this editor as a template for creating and hosting new avatar tools. The code is released under the [MPL 2.0 license](./LICENSE) and we'd love to see what you make with it! Here's a bit about how the editor works:

- The avatar that you see is comprised of different pieces that were designed to work on the same skeleton and body format. [Models](https://github.com/DAO-TON-CON/avatar/tree/main/assets/models) for each piece and category are saved with a specific naming convention, which allows the app to correctly put them into a category depending on where the accessory should be placed on the base model.

- A script takes screenshots of the pieces that are contained in the `assets/models` directory and uses these to indicate the different pieces that can be selected from.

- When you've finished customizing your avatar, the meshes are combined and the correct components to have animations in Metaspace are added to the avatar .glb file that is saved.

![image](https://user-images.githubusercontent.com/24755187/218442961-cea369dd-6134-42ec-bd93-ebc0f29e5616.png)


More information can be found in the [customization guide](./CUSTOMIZING.md).

## FAQ

**Q: I'm an avatar creator - can I make my own avatar editor for Metaspace with this?**

A: Yes! We'd love that. Feel free to drop into the #avatars channel in our [Telegram Chat](https://t.me/tonmetaspace_chat) if you have any questions about that.

**Q: Why isn't this built-in to Metaspace?**

A: We're really keen on keeping a wide range of styles and avatars available for Metaspace. We decided to make this a standalone application so that we could encourage others to build avatar tools that will work with Metaspace, rather than being prescriptive about what we think avatars should look like.

**Q: Can you add a new hat / accessory / t-shirt / hair style?**

A: Since this was a hack week project, we're not actively building this out as a fully featured editor - so probably not.

**Q: Can _*I*_ add a new hat / accessory / t-shirt / hair style?**

A: Sure! If you build something custom and are interested in contributing it back under a Creative Commons Zero license, feel free to submit a pull request that adds a new accessory with the proper naming convention. If you have questions about this, you can reach us on Telegram or email us at dao@tonmetaspace.org

## Resources

- [Avatar Texture Tool (misslivirose)](https://github.com/misslivirose/avatar-texture-tool)
- [Avatar Customizer (rhiannanberry)](https://github.com/rhiannanberry/Avatar-Customizer)
- [Quilt (brianpeiris)](https://github.com/brianpeiris/quilt)
- [Hubs avatar pipelines](https://github.com/mozillareality/hubs-avatar-pipelines/)
- [Advanced Avatar Customization](https://hubs.mozilla.com/docs/creators-advanced-avatar-customization.html)
- [Video: using Hubs components for avatar creation in Blender](https://www.youtube.com/watch?v=qBvZhh6KVcg)
