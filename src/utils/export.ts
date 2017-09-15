import { SearchResult } from '../types';
import {
  acceptBaseUrl,
  baseTaskUrlWorker,
  baseRequeserUrlWorker,
  turkopticonBaseUrl
} from '../constants';

const contactBaseUrl = 'https://www.mturk.com/mturk/contact?requesterId=';
const requesterSearchBaseUrl =
  'https://www.mturk.com/mturk/searchbar?requesterId=';

export const generateMarkdownExport = (hit: SearchResult): string => {
  const {
    title,
    groupId,
    requester,
    reward,
    timeAllotted,
    batchSize,
    description,
    qualsRequired
  } = hit;

  if (requester.turkopticon) {
    const {
      reviews,
      tos_flags,
      attrs: { comm, fair, fast, pay }
    } = requester.turkopticon;

    // tslint:disable:max-line-length
    return `> **Title:** [${title}](${acceptBaseUrl}${groupId})  
    **Worker:** [Preview](${baseTaskUrlWorker}${groupId}/tasks) | [Accept](${baseTaskUrlWorker}${groupId}/tasks/accept_random) | [Requester](${baseRequeserUrlWorker}${requester.id}/projects)  
    **Requester:** [Xtractions](${requesterSearchBaseUrl}${requester.id}) [${requester.id}] ([Contact](${contactBaseUrl}${requester.id}))  
    **[TO](${turkopticonBaseUrl}${requester.id}):** [Pay: ${pay}] [Fast: ${fast}] [Comm: ${comm}] [Fair: ${fair}] [Reviews: ${reviews}] [ToS: ${tos_flags}]  
    **Reward:** $${reward} 
    **Duration:** ${timeAllotted}  
    **Available:** ${batchSize}  
    **Description:** ${description}
    **Requirements:** ${qualsRequired}`;
    
  } else {
    return `> **Title:** [${title}](${acceptBaseUrl}${groupId})  
    **Worker:** [Preview](${baseTaskUrlWorker}${groupId}/tasks) | [Accept](${baseTaskUrlWorker}${groupId}/tasks/accept_random) | [Requester](${baseRequeserUrlWorker}${requester.id}/projects)  
    **Requester:** [Xtractions](${requesterSearchBaseUrl}${requester.id}) [${requester.id}] ([Contact](${contactBaseUrl}${requester.id}))  
    **[TO](No data)]  
    **Reward:** $${reward} 
    **Duration:** ${timeAllotted}  
    **Available:** ${batchSize}  
    **Description:** ${description}
    **Requirements:** ${qualsRequired}`;
  }
};