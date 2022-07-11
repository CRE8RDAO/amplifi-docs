---
title: "Putting the data together"
metaTitle: "AmpliFi Dev - Pulling the data together"
metaDescription: "Overview of AmpliFi Data sources/system"
---

## Sybil list

A list of all users that verified on AmpliFi via signiture in tweet flow.
This is done with Sybil-Verifier codebase


Here is the list:

// mdx link
['Affiliates List'](https://github.com/CRE8RDAO/sybil-list/blob/master/verified.json)




## Referree list

This list is submitted to a gravity form via amplifi.js

And made available via wpgraphql

// add query to get form data filtered by UTM campaign Or UTM Term

['Our WPGraphql Data'](https://cre8r.vip/graphql)

* Absolute: [WP GraphQL Gravity Forms Plugin Docs:](https://github.com/harness-software/wp-graphql-gravity-forms)


 # Query Referee list:
          gfSubmittedEntry(id: 2977, idType: DATABASE_ID ){
            databaseId
            id # global ID
            formDatabaseId
            isDraft
            isStarred
            formFields(first: 300) {
              nodes {
                id
                type
                ... on TextField {
                  label
                  value # The field value
                }
              }
            }
          }
        }

// add query for our main list (AmpliFi All Campaigns Form)


## Onchain Metrics

Now that we have the list of referres addresses (who clicked on referrer tracking links).

We can go onchain to get the final piece of the puzzle! The onchain data about our KPI metrics for a particular campaign.

### DeFi Lama Codebase & Filtering Queries

Lets take a practical example:

Fuji DAO

* Absolute: [DeFi Lama Adapter For Fuji:](https://github.com/DefiLlama/DefiLlama-Adapters/blob/main/projects/fujidao/index.js)






