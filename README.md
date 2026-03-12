# Thesis Supervision w/ Julian @TUM
If you are a TUM student and are interested in writing a thesis with me, this is the right place for you!

<p id="last-commit">Last updated: See timestamp of commit</p>

## Capacities: Medium
My capacities for the upcoming summer semester are not yet exhausted. I can take 1-3 more students.

## How to reach out
Send me an email with a short description of which topic below interests you and why. You can also suggest your own topics, but there is no guarantee I am going to supervise it. Also attach your transcript of records and put a smiley of your choice in the subject line :^)

## Topics
My main research interest is a toolkit called "pix:e - Player Experience Engine". The vision for it is to provide support in game development for the game designer and the team by breaking down complex tasks, tracking dependencies within the design, and helping in the ideation stage of a project. There exists a paper about [PaceMaker], the proof of concept in the early stages of the project. Since then, it has evolved from pacing considerations to general game design support in terms of player experience, pix:e. The project consists of a frontend written in Nuxt4 and a backend written in Django and has many interesting sides for potential thesis topics. Here are the highest priority topics as of now.

### LLM-Assisted Consistency Checking and Change Propagation in Game Design Documentation (High Priority)
Keywords: Frontend, Backend, Python, Nuxt

As game design documentation grows throughout development, it often becomes large, fragmented, and difficult to maintain. Designers may lose track of whether the documentation remains coherent or whether contradictions between different parts of the design have emerged. Additionally, when a change is introduced—such as modifying a gameplay mechanic or system—it can be difficult to determine which other parts of the design are affected.

The goal of this research is to develop functionality for pix:e, a game design documentation tool, that addresses these challenges. Since game design documentation is primarily text-based, modern large language models (LLMs) can be leveraged to analyze design documents and detect inconsistencies, missing dependencies, or conflicting information.

Building on the conceptual foundations of [SPARC] and SPINE (paper coming soon), this research explores the idea of automated design validation, similar to unit testing in software development but applied to documentation. The system will generate and execute automated checks that evaluate the internal coherence of game design documents.

In addition to detecting inconsistencies, the system will support design change management. When a change is introduced to the documentation, the system should help identify related sections that may require updates and suggest possible revisions. This reduces the cognitive load on designers and helps teams maintain consistent documentation as projects evolve.

The research includes:
- designing and implementing the automated validation framework
- integrating the functionality into the pix:e frontend and backend
- evaluating the effectiveness of the approach through user studies and/or real-world design scenarios

Ultimately, the goal is to explore whether LLM-assisted documentation testing and change propagation can improve the maintainability and reliability of game design documentation during development.

### Game Embedding from Steam Pages & Reviews (Master's Thesis)
Tech Stack: Python, PyTorch, Hugging Face Transformers, Sentence-Transformers, scikit-learn, Pandas, Steam Web API / Web Scraping, FAISS or ChromaDB

This research investigates the construction of vector embeddings for video games using publicly available data from Steam store pages and user reviews. The objective is to represent games in a structured embedding space that captures meaningful characteristics such as gameplay mechanics, themes, player experience, and reception.

A key component of this work is identifying relevant dimensions of a game that should be represented in the embedding. These dimensions are derived from multiple data sources available on Steam, including:
- game descriptions and metadata (e.g., tags, genres, release information)
- user reviews and review summaries
- developer-provided descriptions and feature lists

As a baseline representation, the research initially adopts the ten game aspects defined in SPARC, which provide a structured framework for describing game characteristics. These aspects serve as the starting point for embedding construction and evaluation.

The embeddings are generated using modern natural language processing techniques, including transformer-based language models applied to textual game data. Additional structured metadata may be incorporated through feature engineering and combined with text embeddings to produce a unified representation of each game.

The resulting embeddings enable several downstream applications:
- Similarity analysis: identifying games that are similar in design, mechanics, or player experience
- Market positioning: evaluating how a proposed game idea compares to existing titles in the market
- Idea validation: assessing whether a concept occupies a unique or saturated region of the game design space

To support efficient similarity search and analysis across large game datasets, the embedding vectors may be indexed using vector search frameworks such as FAISS or ChromaDB.

Ultimately, the embedding framework may be integrated into pix:e, where it could support tools for game idea exploration, competitive analysis, and design inspiration.

#### Canvas View
Keywords: Frontend, Nuxt

If you like Miro, this is for you. The goal here is to take all the functionality of pix:e and build a canvas view that supports all of it. This is going to improve adoption rate of the tool and makes it more accessible in general.

#### Interview Study (Bachelor / Guided Research)
Keywords: Interview, User Study

In this thesis you are accompanying me in interviewing game design practitioners to find pain points of their workflow which can then ultimately be solved by the toolkit pix:e.


[PaceMaker]: https://arxiv.org/pdf/2408.15001
[SPARC]: https://arxiv.org/pdf/2509.24730
[Statecharts]: https://pdf.sciencedirectassets.com/271600/1-s2.0-S0167642300X00603/1-s2.0-0167642387900359/main.pdf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIG%2B3E8u3npMdNkQ8ZXTuFqiZzAeZO%2FDC%2BQpZiTahXyvGAiBW4akoY7nJN4jDo2JzfLcr7JmZ4yb8Dvnw58njUEOlNCqzBQhPEAUaDDA1OTAwMzU0Njg2NSIMANozGLvrDqZwwBNBKpAFDXdV0rUWdJ9FjJjFBD80lDNQ6ZBKbh9awpCgljCs0xFSFTjBhxoucdBeUJTVo3NnR%2Byw%2FSN6TCKceVAjZ0eZIaILIRc4kv9agmDRxRr5%2FyYDfvGicYNd8nVgx2l2%2B39Rn6AJZwe4LtlNsa64TKSqWLeoazoktZJ6kn0MF3g1M98yeREaraoAZog6BOJSBHx7g7DqWRneV4oiYBhpHgj1VQyWXCRkpsCzRDEXgjIbXQ5d5FsJ%2FuWX5gbeZQrgu%2B4Vfh4E%2FbYbKQKUVknPeZJgNCdiAgq2N6wu%2BW8utTys7GhwEq9wqTVGl0mFx9Y%2Fc4S3NJHCxZVSeTwXWzuizsQo75%2Bqw3NjjESGcH3YeoSTV4OP686nlXNDafLbUfpbC68ieXGAIMCusjM%2F0Oh4DgpxrxmdCxTsHb9FLIg%2F4A2WaDO4ceXRCvxsijgSW4IUoM%2BqtdBxXKOupdZ%2BxF9eugSZXzVOSvcmof2TdPcx1hlilUIxixyTHU7RjKF0QR5rPmKP7NIdo2VxhWoOpnvvQWCZ8itlwcYDZwiW8uAo0QK3M6Zd9iZ5xDnk%2BhTju4GD%2Bp0gck%2FwAEt26ELzVAshr%2BqA0uLZWvrbodQyid%2BXNxg4h%2FjkxqTlLl98KycC9gUmxpFdCpMJ9CgsTAz2ZsV%2Fuf3rMshuyGB9P1uiWJqNm8Np01CCzYtVj%2Fjyv%2BmiqB7%2FXyIYCkGPCe86%2B9iHhttgUU2lJOGx%2B5zpkNearoqFVL2LD%2B7OCyr6JsZkkIuQnh3Jj9HOTSHl1AMsIxBexXeFeY1HMGRCM7eGgVO44r9AzSmmAo8cAguzFSKy4FyRXhqJuSXkCPzgWx4smLgg7MUEUP3ilnvjIxxWVW13kVM72x1blL0w6qXivgY6sgE1yqzn6hm4V1pn18dwQ3LsQXufubWSWWKZGmwdeC2bYODz1aKkQQwH%2BSJ2fr0kmj6nyO2rcJqDGzDviM2XQA4AsRecXqxW4Ylc%2F5kRnoPBPsKH%2BUsbfMRb7mxyva3mAIneD%2BKjbmyLt13z0n6Yw1VwUb%2Boq5kWR9fi7KKV2YvsZE3jyDO6HQNepMuuzOiu2ZFJuoz7a0gSffDoyA5WIknig0y0HMCKkpyrwpfbzLgXhRjL&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250317T221407Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQ3PHCVTYTTXUKGLF%2F20250317%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=34b5b49566800155ade69c45eb9e6ee1d85b97037af9a90126386670928a126c&hash=2e4380844e01bd54860f82d059a8262d75840845abb5f6d508f035f72a4a6cab&host=68042c943591013ac2b2430a89b270f6af2c76d8dfd086a07176afe7c76c2c61&pii=0167642387900359&tid=spdf-59fb33b3-2c9e-4744-90db-2a7af20ab09c&sid=c579ec882997a84a1d78cd24a183f0e75291gxrqb&type=client&tsoh=d3d3LnNjaWVuY2VkaXJlY3QuY29t&rh=d3d3LnNjaWVuY2VkaXJlY3QuY29t&ua=1e0359535f080054515b07&rr=921fd769cfb3d298&cc=de

<script src="script.js"></script>
