# File Type Based Boilerplate

## Introduction

Welcome to the Vue Boilerplate Project! This project provides a comprehensive and well-structured starting point for developing Vue.js applications. It includes a robust directory structure, essential configurations, and a selection of commonly used utilities and components. Whether you are a beginner looking to learn Vue or an experienced developer seeking a solid foundation for your next project, this boilerplate is designed to save you time and help you adhere to best practices.

This boilerplate has been tested and used in enterprise-level applications, ensuring its reliability and effectiveness. It includes a range of features to help you get started quickly, including state management, routing, and a clean organization of files and directories.

Dive in, and let's build something amazing together!

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Project Structure](#project-structure)
   - [assets](#assets)
   - [bridges](#bridges)
   - [clients](#clients)
   - [components](#components)
   - [composables](#composables)
   - [constants](#constants)
   - [directives](#directives)
   - [entities](#entities)
   - [helpers](#helpers)
   - [interfaces](#interfaces)
   - [layouts](#layouts)
   - [libs](#libs)
   - [mappers](#mappers)
   - [plugins](#plugins)
   - [repositories](#repositories)
   - [router](#router)
   - [schemas](#schemas)
   - [services](#services)
   - [stores](#stores)
   - [utils](#utils)
   - [views](#views)
4. [Contributing](#contributing)

## Installation

Currently there are no instalation avaiable

## Usage

You can clone or download the repository and start from there.

## Project Structure

### assets

- **fonts**: Contains font files used throughout the application.
- **images**: Contains image assets used in the project.
- **svg**: Contains SVG files used in the project.
- **style**: Contains style related files used in the project.

### bridges

Intended for files that act as intermediaries or connectors between different subdomains of the application(the anti-cruoption layer)

### clients

Intended for code that interfaces with external systems such as back-end APIs , WebAPIs like session and local storage, IndexDb and ...

### components

Intended for Vue components used throughout the project.

### composables

Intended for composables used throughout the project.

### constants

Intended for storing constants or configurations used across the project.

### directives

Intended for custom Vue directives.

### entities

Intended for defining data models or entities used in the application.

### helpers

Intended for utility functions that perform common tasks across the project (the tricky point is that helpers are diffrent from utils. utils are pure and app agnostic and dont have internal state but helpers are usually not pure and bounded to the app logic and can not be used outside of the context of the app.).

### interfaces

Intended for general interface definitions.

### layouts

Intended for defining the overall structure of layouts in the application.

### libs

Intended for including third-party librarie's decorators or custom libraries used in the project.

### mappers

Intended for mapping data from one format to another.

### plugins

Intended for Vue plugins or other plugins used by the app.

### repositories

Intended for data access logic, such as interacting with APIs or databases (these implement the interface of the external system or in another word the details of comuticating with the external systems).

### router

Contains the routing logic for the application.

### schemas

Intended for data validation schemas.

### services

Intended for service classes or functions that encapsulate business logic.

### stores

Contains state management logic, likely using pinia or another state management library.

### utils

Contains utility functions that can be used across the project (In contrast to helpers, these are pure and app agnostic).

### views

Contains the main view components, which are the pages of the application.

## Contributing

Provide instructions for contributing to the project.
