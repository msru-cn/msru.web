Title: Palantir

URL Source: https://www.palantir.com/docs/foundry/devops/core-concepts/

Markdown Content:
## Core concepts

This page describes the core concepts that underpin Foundry DevOps and Foundry Marketplace. We recommend that you read this page before proceeding since Foundry DevOps and Marketplace use specialized terminology (such as "[product](https://www.palantir.com/docs/foundry/devops/core-concepts/#product)").

## Product

In Foundry DevOps, "products" are collections of Foundry resources that a product builder has made available to install. Builders can create new products in [Foundry DevOps](https://www.palantir.com/docs/foundry/foundry-devops/create-products/).

Example product types include:

*   **Ontology:** An instance of the Foundry Ontology, whether a comprehensive standard industry [ontology](https://www.palantir.com/docs/foundry/ontology/overview/) or an ontology fragment.
*   **Use Case:** A use case can be as simple as a single [Workshop application](https://www.palantir.com/docs/foundry/workshop/overview/) or could involve a combination of multiple Workshop applications, [functions](https://www.palantir.com/docs/foundry/functions/marketplace-functions/), and [Carbon workspaces](https://www.palantir.com/docs/foundry/carbon/overview/).
*   **Pipeline:** Pipelines can range from a single data transformation all the way to a group of many transforms and data connections in sequence.
*   **Modeling:** A containerized executable [model](https://www.palantir.com/docs/foundry/model-integration/models/) encapsulating any functional logic, including machine learning, forecasting, optimization, physical models, and business rules.

Each product has outputs, or _content_, that are produced when the product is installed. Products may require that installers map _inputs_ in order to produce output content.

Products are the atomic unit that users can [browse](https://www.palantir.com/docs/foundry/marketplace/browse-products/) and [install](https://www.palantir.com/docs/foundry/marketplace/install-product/) via the Marketplace storefront.

## Product version

Product builders [create](https://www.palantir.com/docs/foundry/foundry-devops/create-products/) and [publish new versions](https://www.palantir.com/docs/foundry/foundry-devops/manage-products/) of products every time they want to adjust existing product content or add new product content. When installing, we typically recommend choosing the [latest product version](https://www.palantir.com/docs/foundry/marketplace/browse-products/#versions). When new product versions become available, installers can [upgrade manually or opt to receive new versions automatically](https://www.palantir.com/docs/foundry/marketplace/installations/#upgrades).

## Store

Stores are collections of products; these products typically have a shared purpose. Product builders can [publish new products to stores](https://www.palantir.com/docs/foundry/foundry-devops/create-products/). Stores that appear on your Foundry instance may be local (for instance, produced by a builder within your organization who works on your Foundry instance) or remote (for example, the _Foundry Store_ that is available to all Foundry users and maintained by Palantir).

## Installation

An [installation](https://www.palantir.com/docs/foundry/marketplace/installations/) is created when an installer fulfills the required inputs (if any) for a product. Each product can be installed multiple times. Multiple installations are typically created when:

*   A product is required for different user groups. For example, you might install a ticket management product across a variety of support teams, using their ticketing data as input.
*   You need to create an installation for different development environments. For example, you might install a ticket management product into a pre-production [space](https://www.palantir.com/docs/foundry/security/orgs-and-spaces/) and [ontology](https://www.palantir.com/docs/foundry/ontologies/ontologies-overview/), and again into a production space and ontology, each with their own input data and environment-specific settings like [release channels and upgrade windows](https://www.palantir.com/docs/foundry/marketplace/installations/#installation-settings).
