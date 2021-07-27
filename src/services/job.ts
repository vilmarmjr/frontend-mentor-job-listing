import { Job } from '@/models/job';
import jobsData from '../data/jobs.json';

export default {
  getJobs(filters: string[] = []): Promise<Job[]> {
    const jobs = jobsData as Job[];

    if (!filters?.length) {
      return Promise.resolve(jobs);
    }

    const filteredJobs = jobs.filter(job => {
      return (
        filters.includes(job.role) ||
        filters.includes(job.level) ||
        job.languages.some(language => filters.includes(language)) ||
        job.tools.some(tool => filters.includes(tool))
      );
    });

    return Promise.resolve(filteredJobs);
  }
};
