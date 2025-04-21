import { keys as cms } from '@pulse/cms/keys';
import { keys as email } from '@pulse/email/keys';
import { keys as flags } from '@pulse/feature-flags/keys';
import { keys as core } from '@pulse/next-config/keys';
import { keys as observability } from '@pulse/observability/keys';
import { keys as rateLimit } from '@pulse/rate-limit/keys';
import { keys as security } from '@pulse/security/keys';
import { createEnv } from '@t3-oss/env-nextjs';

export const env = createEnv({
  extends: [
    cms(),
    core(),
    email(),
    observability(),
    flags(),
    security(),
    rateLimit(),
  ],
  server: {},
  client: {},
  runtimeEnv: {},
});
