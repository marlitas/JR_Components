<h1 align='center'> Data Integration </h1>

## Definition
Data Integration allows developers too bring together data from different sources so that users can view and interact with the data as needed for an application. This can take many forms including consolidation, aggregation, analysis, among others. This DOES NOT include: authentication, data visualization, or syncing data across applications. Although these aspects may interact with data integration, the integration itself is responsible for how we can use and interpret data from various sources (ie. database, website analytics, conversion rates, financial records, etc.). 

Data integration can help companies streamline their efforts, and has become essential to efficient production as data consumption and gathering increases. 

## Environment Considerations
Backend environments at Justice Reskill will generally be built use Express/Node.js and MongoDB. Thefore we ask that developers maintain those environments for the components in this collection. Any additional dependencies components may need will be listed in the component documentation.

## Recommended Tools
| Packages | Testing | Dependencies |
|------|------|------|
| Nodemon | Mocha | Mongoose |
| Dotenv | Chai |      |

## Components

#### [Create Document in MongoDB Collection](link_to_the_component_code_snippet)

<img src="https://media.giphy.com/media/e1bS77QKMCIgFXaZKV/giphy.gif" align="right" width="480" height="280">

> The file linked to here contains the code snippet needed to create a new document in a MongoDB collection. Link to full repository to check Model schema, testing, and routing, can be found [here](https://github.com/marlitas/CRUD). The code in this snippet uses a basic user model to create mock data. Comments in snippet will help guide developer on where to fill in their own information to integrate in application. 
 
 > Common use cases for this component includes:
 > - User Registration
 > - Adding products to inventory
 > - Blog post

 > Dependencies:
> | Tool | Documentation |
> |-----|-----|
> | Mongoose | [Docs](https://mongoosejs.com/) |
> | express.Router| [Docs](https://expressjs.com/en/guide/routing.html) |

## Resources
| Design | Docs | Tutorials |
|------|------|------|
| [What is Data Integration](https://info.hurree.co/en-gb/data-integration#whatisdataintegration) | [Database Integration with Express](https://expressjs.com/en/guide/database-integration.html) |    |
|     |     |     |
