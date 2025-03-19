<script>
  async function fetchLastCommit() {
    const repo = "YOUR-USERNAME/YOUR-REPO"; // Replace with your repo
    const response = await fetch(`https://api.github.com/repos/${repo}/commits`);
    const data = await response.json();
    
    if (data && data.length > 0) {
      const lastCommitDate = new Date(data[0].commit.committer.date).toLocaleString();
      document.getElementById("last-commit").innerText = `Last Commit: ${lastCommitDate}`;
    }
  }

  fetchLastCommit();
</script>

# Thesis Supervision w/ Julian @TUM
If you are a TUM student and are interested in writing a thesis with me, this is the right place for you!

## Last updated
<p id="last-commit">Fetching last commit...</p>

## Capacities: Almost full!
Right now, there are some students who are finishing up in the next few months and some who are starting in the next few months. Depending on my workload and the topics I have to supervise, I might still have one or two spots left.

## Topics
A list of topics currently available. See the timestamp of the last commit for recency.

### PIX:E - Player Interaction & Experience Engine
Languages & Frameworks: Vue.js (Frontend), Python (Backend)

The Player Interaction & Experience Engine is my main research interest. The vision is to develop a tool that supports the game designer and the team by breaking down complex tasks, tracking dependencies within the design, and helping in the ideation stage of a project. There exists a paper about [PaceMaker], the proof of concept in the early stages of the project. Since then, it has evolved from pacing considerations to general game design support in terms of player experience, PIX:E. The project has many interesting sides for potential thesis topics. Here are the highest priority topics as of now.

#### Integration and Extension of Formalized Play Building Blocks
There are 4 building blocks which make up our proposed game design formalization: gameplay beats, pacing diagrams, experience charts, and maps. The first three are implemented in PIX:E in a very basic form. however, in the current version, gameplay beats are not very modular, pacing diagrams are limited to intensity values, and the experience charts do not support concurrency or nesting (see [Statecharts]). Furthermore, maps are not implemented at all. This topic revolves around the extension of existing building blocks and the integration of maps into PIX:E.

#### Usability Improvements
The current version is not very user friendly and needs drastic improvements to the overall workflow. Therefore, this topic includes research about UX and the integration of usability concepts into the frontend of PIX:E.

#### Interactive Moodboard Generator
This topic involves the integration of multimodal LMMs and GenAI to create functionality for generating moodboards as a mixed initiative toolkit. The user should be able to prompt the model with a description of the mood and possibly some reference images as well. The model should then in an expansive phase generate versions of images that might fit the description. The user can then pick the ones they like to add to the board, or refine by telling the model to go more into a certain direction (e.g. when generating 4 images, one could tell the model to go more into the direction of image 3).

#### Backend Implementation with Open Source LLMs
In order to have a tool that is supported by LLMs and multimodal models, we need to have a backend that runs these resource heavy models. This thesis topis therefore revolves around setting up a backend infrastructure that allows prompting the models running in the backend from the frontend and receiving their answers.

[PaceMaker]: https://arxiv.org/pdf/2408.15001
[Statecharts]: https://pdf.sciencedirectassets.com/271600/1-s2.0-S0167642300X00603/1-s2.0-0167642387900359/main.pdf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIG%2B3E8u3npMdNkQ8ZXTuFqiZzAeZO%2FDC%2BQpZiTahXyvGAiBW4akoY7nJN4jDo2JzfLcr7JmZ4yb8Dvnw58njUEOlNCqzBQhPEAUaDDA1OTAwMzU0Njg2NSIMANozGLvrDqZwwBNBKpAFDXdV0rUWdJ9FjJjFBD80lDNQ6ZBKbh9awpCgljCs0xFSFTjBhxoucdBeUJTVo3NnR%2Byw%2FSN6TCKceVAjZ0eZIaILIRc4kv9agmDRxRr5%2FyYDfvGicYNd8nVgx2l2%2B39Rn6AJZwe4LtlNsa64TKSqWLeoazoktZJ6kn0MF3g1M98yeREaraoAZog6BOJSBHx7g7DqWRneV4oiYBhpHgj1VQyWXCRkpsCzRDEXgjIbXQ5d5FsJ%2FuWX5gbeZQrgu%2B4Vfh4E%2FbYbKQKUVknPeZJgNCdiAgq2N6wu%2BW8utTys7GhwEq9wqTVGl0mFx9Y%2Fc4S3NJHCxZVSeTwXWzuizsQo75%2Bqw3NjjESGcH3YeoSTV4OP686nlXNDafLbUfpbC68ieXGAIMCusjM%2F0Oh4DgpxrxmdCxTsHb9FLIg%2F4A2WaDO4ceXRCvxsijgSW4IUoM%2BqtdBxXKOupdZ%2BxF9eugSZXzVOSvcmof2TdPcx1hlilUIxixyTHU7RjKF0QR5rPmKP7NIdo2VxhWoOpnvvQWCZ8itlwcYDZwiW8uAo0QK3M6Zd9iZ5xDnk%2BhTju4GD%2Bp0gck%2FwAEt26ELzVAshr%2BqA0uLZWvrbodQyid%2BXNxg4h%2FjkxqTlLl98KycC9gUmxpFdCpMJ9CgsTAz2ZsV%2Fuf3rMshuyGB9P1uiWJqNm8Np01CCzYtVj%2Fjyv%2BmiqB7%2FXyIYCkGPCe86%2B9iHhttgUU2lJOGx%2B5zpkNearoqFVL2LD%2B7OCyr6JsZkkIuQnh3Jj9HOTSHl1AMsIxBexXeFeY1HMGRCM7eGgVO44r9AzSmmAo8cAguzFSKy4FyRXhqJuSXkCPzgWx4smLgg7MUEUP3ilnvjIxxWVW13kVM72x1blL0w6qXivgY6sgE1yqzn6hm4V1pn18dwQ3LsQXufubWSWWKZGmwdeC2bYODz1aKkQQwH%2BSJ2fr0kmj6nyO2rcJqDGzDviM2XQA4AsRecXqxW4Ylc%2F5kRnoPBPsKH%2BUsbfMRb7mxyva3mAIneD%2BKjbmyLt13z0n6Yw1VwUb%2Boq5kWR9fi7KKV2YvsZE3jyDO6HQNepMuuzOiu2ZFJuoz7a0gSffDoyA5WIknig0y0HMCKkpyrwpfbzLgXhRjL&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250317T221407Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQ3PHCVTYTTXUKGLF%2F20250317%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=34b5b49566800155ade69c45eb9e6ee1d85b97037af9a90126386670928a126c&hash=2e4380844e01bd54860f82d059a8262d75840845abb5f6d508f035f72a4a6cab&host=68042c943591013ac2b2430a89b270f6af2c76d8dfd086a07176afe7c76c2c61&pii=0167642387900359&tid=spdf-59fb33b3-2c9e-4744-90db-2a7af20ab09c&sid=c579ec882997a84a1d78cd24a183f0e75291gxrqb&type=client&tsoh=d3d3LnNjaWVuY2VkaXJlY3QuY29t&rh=d3d3LnNjaWVuY2VkaXJlY3QuY29t&ua=1e0359535f080054515b07&rr=921fd769cfb3d298&cc=de
