---
layout: '@/templates/BasePost.astro'
title: Innovative Design - Rhythm Radiance
description: Quinn Renaghan
pubDate: 2024-03-22T00:00:00Z
imgSrc: '/assets/images/stock_bulb.png'
imgAlt: 'Image post'
---
<style is:global>
  nav {
    font-size: 1.3rem;
  }
  :root {
    font-family: monospace;
  }
</style>

For this project, I worked in a multidisciplinary team of 5 QUEST Honors students to create a product inspired by nature. 

At the outset, we conducted research and stakeholder interviews, and identified the problem of uncomfortable and wasteful lighting. After ideating many solutions, we formed a decision matrix, and settled on **Rhythm Radiance**, a lightbulb and companion app that can automatically adjust based on circadian rhythm and natural light levels. **Rhythm Radiance** can improve sleep and productivity by better aligning hues with the user's circadian rhythm, and saves energy by lowering light intensity when there are high levels of natural light. 

Next, we created a low-res prototype and conducted a preliminary testing session to get qualitative feedback from users. We also sent out a survey to get quantitative data describing the importance of certain features and potential paint points. Then, we analyzed this feedback, and refined the product accordingly - adding a grouping feature, improved customization options, and choosing more sustainable materials (glass and wood). 

With our improved idea, we created a final working prototype, shown below, and completed market, technical, financial, and impact analyses, delegating the tasks according to individual strengths within the team.

<img class="h-full w-full rounded-lg object-cover object-center" src="/assets/images/prototype.png" alt="Image post" loading="lazy">

_The prototype utilizes an Arduino Uno, 4 different colored LEDs, photocells, buttons, resistors, and code written in C++. When the photocell detected more natural light, the Arduino uses pulse-width modulation (PWM) to decrease the power sent to the LEDs. Throughout the day, the ratio of LED color changes according to the user's circadian rhythm, with warm colors at night, and cool colors during peak hours of the day._

Finally, to pitch our product to potential investors, we prepared a presentation and technical paper. Feel free to reach out to my email for any additional information!
