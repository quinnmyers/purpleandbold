---
title: Analytics in Websites
date: '2019-02-03T22:12:03.284Z'
author: 'Quinn Myers'
tags: ['marketing, miscellaneous']
featuredImage: blog-analytics-noreflect.jpg
description: "Learn what analytics are, how to use analytics, and why analytics are important to your business' success"
featured: true
---

## Analytics In Websites - What are they and why are they important?

If your goal is to increase conversions on your website or even learn how to make your website better, correctly using Analytics is necessary for you to achieve those goals quickly. Analytics help you to make informed decisions about how to improve your website and overall digital strategy.

Before we learn how to use Analytics, we have to know what Website Analytics are in a general and fundamental sense. Here is the definition of analytics:

> an·a·lyt·ics
> <br><br>_noun_ <br><br>
>
> the systematic computational analysis of data or statistics <br>
> information resulting from the systematic analysis of data or statistics

We are most interested in the part of that definition that mentions information, meaning Website Analytics give us useful information about our website. Information we can analyze allows us to make informed decisions about our website, such as improvements to content, change of structure, or adjustments to the design.

Often and mistakingly, Website Analytics is seen as a passive feature in a website, checked regularly, or never, to see if trends are up or down. Instead, when used properly, Analytics allow you to take an active approach to improve your website. Like any other part of your business, your website can be adjusted, expanded, and improved. Utilizing Website Analytics to their fullest potential is the fastest and most calculated way of making improvements to your website.

## The Basics

Please note, the items described in this section are present in Google Analytics, which is the most common form of Analytics installed on most websites. However, if your website is using different analytic tooling, a lot of this information is likely still available to you.

The most basic form of website analytics will show you: <br>

- **Real Time Users**<br>
  The “real-time” amount of users on your website right now. Measures how many people are using your website in a given moment.<br><br>
- **Audience Overview (Users/Visits)**<br>
  The amount of views/visits your website has received in the specified period. This panel also shows you which kind of devices people are using (desktop or mobile), and from which country their IP Address originates.<br><br>
- **Behaviors (Bounce Rate)**<br>
  Behaviors show how people visiting your website are interacting with it. In addition to a few others, the Behavior panel shows us Session Duration and Bounce Rate. Session duration is self-explanatory, it is the number of time visitors spend on your website, and Bounce Rate is defined as the number of people who landed on your website and left without doing anything. However, Bounce Rate can be very misleading in some circumstances, and we suggest you read our separate post on What is bounce rate? How do you improve Bounce Rate? so you can get a full understanding of what Bounce Rate is.
  Together, those sum up all the basic pieces of information Website Analytics give us. For some businesses, depending on the design, structure, and goals of their website, this information can be somewhat useful. However, generally speaking, the basic information Analytics offer by default are not incredibly useful; monitoring these is often very passive and un-actionable.<br><br>

Let’s see what can be done to get higher quality information out of our Analytics.

## What Are Events in Analytics?

With more attention and a small investment of time, we can fine tune our Analytics and customize the information output to show us exactly what we need to see. Within the world of Analytics, these customizations are called _Events_. Almost any action a visitor performs on your website can be made into an _Event_, or measurable data that can later be analyzed.

All of the following can be _Events_, and the list is not exhaustive by any means it is just meant to give you an idea of what actions can become _Events_:

- The click of a button
- The % amount scrolled on your website a user reaches
- Filling in or focusing on (selecting) a form
- Hovering over an area
  <br><br>

Now we know what _Events_ are, let’s learn why they are so useful, and how we may want to implement them. To so do, we need a create a hypothetical situation.

## Real World Example

In our example, we looked at a website trying to get users to sign up to their mailing list. Here are some basic facts about our hypothetical website:

- The website has a prominent call to action on the homepage with a Signup Form.
- The first section seen by visitors features a “Click To Learn More” button linking users to a FAQ Page on the website, offering more information about the product, this FAQ Page also has a Signup Form.
- There is general information about the product 80% down the homepage.
- The last section of this homepage of this website is a Contact Us form.
  <br><br>

To sum this example up, the website’s primary goal is to get users to sign up to their mailing list. Users can do this immediately upon landing on the website or click a button to visit a FAQ Page also featuring a Sign-Up form. The homepage has product information almost at the end of the page, and then at the very end of the homepage, there is a contact form. Overall, this is a pretty basic website, many websites look pretty similar to this and share common goals - to have users take action on their homepage (sign up for something, download something, or buy something).

Before we get to the next section, let’s also create example data for the basic Analytics of the example website. We will assume this website already has some basic analytic tooling installed, and the data looks like this:

- 50 Visitors to the website today
- Average Session Duration is 18 seconds
- Bounce rate is 50%
- 0 Submissions to the contact form
- 8 people signed up for the mailing list today
  <br><br>

Okay, now we have an example website to work with, and example analytic data to go along with it. While that information we have is useful, we can make it a lot better.

## Applying Events to Our Example Website

Let’s learn how we would add events to that example website. Remember, an _Event_ can be any action a user can take on the website. So, because an _Event_ can be almost anything, consider what we **want to learn** about user behavior on this example website. Here are a few _Events_ I can think of adding with descriptions about what that _Event_ tells us:

- **‌User Clicked the “Learn More” Button**<br>
  Shows how many users click the “Learn More” button.<br><br>
- **User Signed Up for Mailing List from Homepage**<br>
  Shows how many people used the signup form on the Homepage of the website to sign up for the mailing list.<br><br>
- **User Signed Up for Mailing List from FAQ Page**<br>
  Shows how many people used the signup form on the FAQ Page of the website to sign up for the mailing list.<br><br>
- **User Scrolled Down 50% of the Page**<br>
  Shows how many users scroll down half of the homepage; this shows how much of our website users are seeing. Often it’s too easy to assume that all the content we put on our website is seen and consumed. Usually, only a small percentage of users see your entire website.<br><br>
- **User Filled In Contact Form/Focused on Contact Form**<br>
  This _Event_ allows us to see how many people are focusing on or filling out fields on our Contact Us form.<br><br>

Now that we have defined some (pretty basic) custom _Events_ let’s fill in those events with some dummy data.

#### Based on 50 Users

- 38 users clicked your “Learn More” Button (76%)
- 6 users scrolled down 50% of your website (12%)
- 3 users filled out the Contact Us form. (6%)
  <br><br>

#### Based on 8 Signups

- 7 users signed up using the Homepage Signup Form (87.5%)
- 1 user signed up using the FAQ Page Signup Form (12.5%)
  <br><br>

Now we have our example website, some basic Analytic data, and more in-depth custom data from _Events_ that we have created. Now let’s see how this all comes together and helps us to make informed decisions about our website and how to increase engagement.

## Putting It All Together

Looking at all of our example data together, we can begin to put the pieces together and really know how our website is performing. Analyzing this data allows us to create a list of actionable items we can implement to improve engagement and user experience.

First, we see that a whopping 76% of visitors click the “Learn More” Button, that is great. A large majority of users clicking this button tells us the text is compelling around the button, and that users landing on the website are interested in the product. Sure, they are not immediately signing up, but at least they are interested enough to click the “Learn More” Button. However, only 1 of the 38 people who clicked the button ended up signing up to the mailing list. This information tells us the FAQ page needs some serious work. Maybe the content needs to be edited to be more compelling, and maybe the signup form doesn’t even function on user’s phones. Now we know that the FAQ Section of our website needs to be changed and improved.

We also get a lot of information and insight based on the data from the other custom events as well. Let’s take a look at the scroll _Event_. Only 12% of users scrolled to or past the 50% point on the website. Such a small percentage of users visiting lower portions of the website tells us many people don't see our information towards the bottom of the page. Now, we can either try to make the information at the beginning of the website more compelling and lead users down the website in a more natural way, or we can move the most necessary information higher up the webpage, so more users see it.

As for the Contact Us form, our _Events_ show we had 3 visitors fill out fields in the form or focus on the form, but there were zero submissions to the form today. These are hot leads lost, they wanted to reach out to you and almost did, but for some reason, they left the form filled in or closed the page before sending it. Again, we can check to ensure that our form is functioning in the first place because this tells us it may not function. If it is working, maybe a small note on the form stating “We always respond within 12 hours” or in some cases the implementation of a live chat feature may help to capture these leads and begin a dialogue.

## Summary

Now we have learned what basic analytics are, how we can improve upon the basic information given us with _Events_, and most importantly, we’ve seen examples of how this information can lead to us making informed decisions about improving our website and online strategy.

Start thinking about the goals of your business and website, think of _Events_ that would apply to your website, and how that information empowers you to make informed decisions that improve your website, helping you get more leads and increase conversions from your website.
