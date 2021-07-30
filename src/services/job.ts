import { Job } from '@/models/job';
import jobsData from '../data/jobs.json';

export default {
  getJobs(filters: string[] = []): Promise<Job[]> {
    const jobs = jobsData as Job[];

    if (!filters?.length) {
      return Promise.resolve(jobs);
    }

    const filteredJobs = jobs
      .map(job => ({ ...job, tags: [job.role, job.level, ...job.languages, ...job.tools] }))
      .filter(job => filters.every(filter => job.tags.includes(filter)));

    return Promise.resolve(filteredJobs);
  }
};
