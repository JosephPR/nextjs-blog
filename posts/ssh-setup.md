---
title: 'SSH Setup for Github'
date: '2022-12-01'
image: 'https://images.unsplash.com/photo-1647166545674-ce28ce93bdca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80'
---


#### In the terminal, Enter ls -al ~/.ssh to see if existing SSH keys are present.
if no key is present
Either generate a new SSH key or upload an existing key.

If you don't have a supported public and private key pair, or don't wish to use any that are available, generate a new SSH key.

If you see an existing public and private key pair listed (for example, id_rsa.pub and id_rsa) that you would like to use to connect to GitHub, you can add the key to the ssh-agent.

For more information about generation of a new SSH key or addition of an existing key to the ssh-agent, see ["Generating a new SSH key and adding it to the ssh-agent."](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)