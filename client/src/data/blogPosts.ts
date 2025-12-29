export interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "ruins-remembered",
    title: "The Ruins That Need to be Remembered",
    date: "December 28, 2025",
    category: "The Journey",
    excerpt: "I live in Phoenix, Arizona. My daughter lives in Charlestown, Indiana. During a visit, she mentioned a local park called Rose Island. 'We should walk through it,' she said. 'It's beautiful.' I'd never heard of the place...",
    content: `
      <p>I live in Phoenix, Arizona. My daughter lives in Charlestown, Indiana.</p>
      <p>During a visit, she mentioned a local park called Rose Island, suggesting we should go for a walk there. "We don't have to spend all afternoon there" she said. "It's beautiful, come on."</p>
      <p>I'd never heard of the place, so it took a little more coaxing to get me to close my laptop, forget about making coffee, and get up off the couch.</p>
      <p>She held back the information she knew would get me, and got ready to close the deal, "oh she began, "you should know, this park used to be an incredible amusement park and resort in the 1920's and 30's". "When the flood of 1937 came, it destroyed it…" "Now, all that's there are the remnants. And they cleaned it up, so it's nice to walk through…</p>
      <p>Say no more, I grabbed my jacket and headed for the door.</p>
      <p>We drove the 2 miles to get there, parked in a gravel lot, and started down the trail. Within minutes, I understood why she'd wanted me to see it. The woods were lush, and green. Nothing like Arizona.</p>
      <p>But I wasn't prepared for two things… First, a large, and I mean large, nearly 100-year-old iron bridge that crossed over 14-mile creek, into the park (iron bridges are a personal favorite). You must picture this. You're in a heavy, thick forest, in the middle of nowhere. You've walked a mile deeper into it, not seeing another human being. And from out of nowhere… a massive iron bridge. It's breathtaking.</p>
      <p>And what waited on the other side of the bridge? The entrance to Rose Island.</p>
      <h3 class="text-2xl font-serif text-rose-900 mt-8 mb-4">What I Found</h3>
      <p>Remains of concrete and features spread out across the forest. Interpretive signs that detailed what once stood in various places. A food hall that fed 1600 at one time, a dance hall and skating rink that had clearly held a couple of hundred guests, and a bluff where a small luxury hotel once sat.</p>
      <p>And there was more… The cement outline of an Olympic-sized swimming pool, now filled with pea gravel but still perfect. Still imposing.</p>
      <p>Stone pillars rising from the undergrowth, marking what had once been the grand entrances at the dock.</p>
      <p>Metal archways form a tunnel through the trees. Several, stretching into the distance.</p>
      <p>Another sign marked what had been the location of a 65-foot Ferris wheel.</p>
      <p>I stopped walking and just stared.</p>
      <p>This wasn't the remains of a small roadside attraction. This was infrastructure. This was ambition. This was something that had required vision, capital, engineering, employees… A lot of employees.</p>
      <p>And I had absolutely no idea it had ever existed. How had I never heard of this? That question nagged me repeatedly.</p>
      <h3 class="text-2xl font-serif text-rose-900 mt-8 mb-4">More Questions That Wouldn't Let Go</h3>
      <p>Flying back to Phoenix, more questions. I couldn't stop thinking about those ruins.</p>
      <p>Who built this? When? Why had it closed? And most importantly: how had something this substantial simply vanished from memory?</p>
      <p>I did what anyone would do. I searched online.</p>
      <p>And found almost nothing.</p>
      <p>A sparse Wikipedia entry with conflicting dates. A handful of vintage photographs with minimal context. Scattered references that called it "a riverside resort with amusement rides" or "an amusement park that got flooded."</p>
      <p>But what I'd seen wasn't small. And it wasn't a simple amusement park.</p>
      <p>So, I kept digging.</p>

      <h3 class="text-2xl font-serif text-rose-900 mt-8 mb-4">The First Hook: The Scale</h3>
      <figure class="my-8">
        <img src="/images/RoseIslandCleanArial.png" alt="Aerial map of Rose Island showing the scale of the park" class="w-full rounded-lg shadow-lg" />
        <figcaption class="text-center text-sm text-muted-foreground mt-2 italic">Aerial view of Rose Island showing the extent of the park. Source: Rose Island 14 Miles Above Louisville (c. 1930). Digital Collection, Charlestown-Clark County Public Library.</figcaption>
      </figure>
      <p>Property details and old maps revealed that Rose Island wasn't just the central park area with rides and attractions.</p>
      <p>The property covered 118 acres.</p>
      <p>Picnic areas designed to accommodate 1,500 people at once. A proposed golf course that was never completed. A baseball field. Extensive walkways connecting different zones. The hotel.</p>
      <p>Twenty-six guest cabins along the river. Cottages in the back part of the park where some staff lived</p>
      <p>This wasn't a weekend project. This resort destination was built to rival anything in the region.</p>
      <p>How does something that size get forgotten?</p>

      <h3 class="text-2xl font-serif text-rose-900 mt-8 mb-4">The Second Hook: What Someone Else Saw</h3>
      <p>Then I found a 2004 newspaper article. A reporter who'd researched Rose Island's history.</p>
      <p>He called it "the Disneyland of its day."</p>
      <div class="my-8 flex justify-center">
        <a href="https://www.newspapers.com/article/the-courier-journal-the-disneyland-of-it/187414028/" style="text-decoration: none;display:block;" target="_blank" rel="noopener noreferrer"> 
          <img src="https://img.newspapers.com/img/thumbnail/181279339/300/300/674_2542_3013_1446.jpg" alt="The Disneyland of its Day" style="max-width:100%;"> 
          <span style="display:block;font: 13px helvetica, sans-serif; color: #747474;padding: 4px 0;max-width: 700px;"> <strong>The Disneyland of its Day</strong> Nov 23, 2004 <em>The Courier-Journal (Louisville, Kentucky)</em> Newspapers.com </span> 
        </a>
      </div>
      <p>I'd had that exact thought standing in those ruins. And here was someone else, 67 years after the park closed, arriving at the same conclusion.</p>
      <p>But even then, even with a journalist recognizing what Rose Island had actually been, there were no books. No documentaries. No comprehensive histories that I could find.</p>
      <p>Just this article. And then silence.</p>

      <h3 class="text-2xl font-serif text-rose-900 mt-8 mb-4">The Third Hook: The Numbers That Didn't Make Sense</h3>
      <p>Then I found a photograph that shattered my understanding.</p>
      <figure class="my-8 md:float-left md:mr-8 md:w-2/3">
        <img src="/images/RoseIslandDockandGuests.webp?v=3" alt="Historic photo of Rose Island Dock crowded with guests" class="w-full rounded-lg shadow-lg" />
        <figcaption class="text-center text-sm text-muted-foreground mt-2 italic">Guests arriving at the Rose Island entrance arch. Credit: Caufield & Shook / Courier-Journal Archives (1926)</figcaption>
      </figure>
      <p>A large steamboat docked at Rose Island's landing. Passengers disembarking. Not dozens, but hundreds…all heading toward the park entrance.</p>
      <p>I read everything I could find about how people reached Rose Island.</p>
      <p>This wasn't unusual. During the summer months, three to five steamboats docked daily. Plus, ferries running from Louisville, Madison, Utica, and Jeffersonville across the Ohio River. Plus, visitors driving Highway 62, parking outside the resort, and crossing a 400-foot swinging footbridge to enter the park.</p>
      <p>The visitor numbers were staggering:</p>
      <ul class="list-disc pl-6 my-4 space-y-2">
        <li>1,500-2,000 people per day on average summer days</li>
        <li>Peak days (July 4th and Labor Day) each saw 4,500 visitors.</li>
      </ul>
      <p>And here's what made it impossible to comprehend:</p>
      <p>Rose Island was located on a peninsula in Charlestown, Southern Indiana.</p>
      <p>Population in 1920: 820 people</p>
      <p>Population in 1930: 859 people</p>
      <p>Read that again.</p>
      <p>A town of 859 people was home to an amusement park that drew 4,500 visitors in a single day.</p>
      <p>Steamboats arriving from major cities. Nationally touring bands performing in the pavilion. An outdoor, Olympic-sized, filtered swimming pool, a marvel in the 1920s and the first in the Midwest.</p>
      <p>How could there not be books? Movies? Documentaries?</p>
      <p>How could something this significant, this successful, this ambitious, in the 1920s and '30s, no less, simply vanish from collective memory?</p>

      <h3 class="text-2xl font-serif text-rose-900 mt-8 mb-4">When Curiosity Became Passion</h3>
      <p>I couldn't let it go (can you tell).</p>
      <p>I started hunting through newspaper archives. Not just articles about Rose Island, but society pages, U.S census documents, weather reports, classified ads. Anything that might mention the park or reveal details about the founder or daily operations.</p>
      <p>I found information on property deeds. Construction crews. Oral histories from descendants of families who'd visited, and the story of Rose Island began to unfold.</p>
      <p>Each piece of evidence revealed a place more impressive than the last description suggested.</p>
      <p>And each revelation made the forgetting more inexplicable.</p>
      <p>But the most troubling discovery came when I finally found information about the man who'd built it: David Rose.</p>
      <p>The few references I could locate described him as "a former partner in the Jeffersonville Ferry operation, and amusement park owner from Louisville who lost everything in the flood. I went on a tour of the park with a local park historian. She confirmed the details I'd found, but added a tragic note: that David Rose died years later, broke and living in the rented apartment of a friend.</p>
      <p>That version of his story didn't match the evidence I was uncovering. Not even close.</p>
      <p>And that's when curiosity turned into something else entirely.</p>
      <p>This wasn't just about a forgotten amusement park anymore. This was about a man whose legacy had been not just erased, but rewritten…reduced to the most dismissive possible characterization.</p>
      <p>If the evidence I was finding was accurate, David Rose deserved better than to be remembered as a failed amusement park operator.</p>
      <p>Rose Island deserved better than to be reduced to a footnote in history that said "amusement park, destroyed by flood."</p>
      <p>And the hundreds of thousands of people who'd made memories there, who'd fallen in love there, who'd brought their children there, who'd experienced lifetime memories there, they deserved to have those stories acknowledged rather than erased.</p>

      <h3 class="text-2xl font-serif text-rose-900 mt-8 mb-4">The Moment I Knew</h3>
      <p>I was sitting at my desk in Phoenix, staring at a 1958 obituary I'd just found.</p>
      <p>"David Rose, Business, Civic Leader for Years, Dies."</p>
      <p>"Once Connected With 26 Firms, Headed Several."</p>
      <p>A half-page obituary in The Courier-Journal. Detailed documentation of a life of civic achievement and business leadership.</p>
      <p>And within a generation, he'd been completely forgotten, or worse, misremembered as someone he wasn't.</p>
      <p>That's when I knew this had to become more than research. More than a personal fascination.</p>
      <p>This had to become a book.</p>
      <p>Not a history book. Those are written by historians with academic credentials I don't have.</p>
      <p>Not a memoir. This wasn't primarily my story.</p>
      <p>A novel. A reconstruction. An act of imagination grounded in evidence, bringing back to life a place and the people who built it, worked it, and loved it.</p>
      <p>A refusal to let "forgotten" ever be the last word written about Rose Island and David Rose.</p>

      <h3 class="text-2xl font-serif text-rose-900 mt-8 mb-4">What Came Next</h3>
      <p>I spent the next year reconstructing Rose Island's 14 seasons. From its vibrant Grand Opening to their biggest attendance day in history, the Fourth of July 1936 celebration, through the devastating January-February 1937 flood that destroyed it.</p>
      <p>I worked from fragmentary evidence: the newspaper clippings, the property records, the oral histories, the photographs that captured moments but not meaning, and conversations with family members who had visited but are now passed on.</p>
      <p>The Rose Island Story is the result.</p>
      <p>It's more than a historical novel. It's an act of resurrection and redemption. Legacy for both the park and its founder. Deserved. Earned.</p>
      <p>The truth about David Rose. Who he actually was, what he actually accomplished, and how the 'broke amusement park owner' myth took hold are among the most surprising discoveries I made.</p>
      <p>You'll find that story in The Rose Island Story.</p>
    `,
    image: "/images/RoseIslandCleanArial.png"
  }
];
