Skylight React Interview Project
===========================

First of all, **feel free to download this project** off of Glitch, if you don't want to work through their IDE. We made it a Glitch project so that you don't have to spend any time configuring your local environment, but use the environment of your choice!

## The Assignment

### What's already built?
The boilerplate we've provided here is a fully-functional file uploader. It takes 1 (or many) files and uploads them to a **public S3 bucket** (don't test it with confidential files!). Once the upload is finished, you can see whether it was successful by navigating to the upload URL in your browser.

### What should you add?
Your goal is to make the `UploadProgress` component actually work. Right now, it never even gets rendered.

The final product should be a **UI that allows uploading multiple files in parallel, and shows the progress of each in real-time as they upload**.

### What are the rules?
There are **no rules**! Feel free to change, add, or delete whatever you want. The boilerplate is only meant as a way to get started, but if you find that some component or function is not structured to your liking, feel free to refactor.

As long as the final product meets the criteria outlined above, this is your sandbox to code however you like!

### Potential Gotchas
I did encounter one issue with Glitch while building this. It seems that sometimes their webpack watch process gets killed. So if you're making changes to the code and they're not being reflected in the Show panel, even when you hit the refresh button, try editing the `throttle` number in `watch.json`.