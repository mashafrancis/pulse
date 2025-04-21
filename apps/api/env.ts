import { keys as analytics } from '@pulse/analytics/keys';
import { keys as auth } from '@pulse/auth/keys';
import { keys as database } from '@pulse/database/keys';
import { keys as email } from '@pulse/email/keys';
import { keys as core } from '@pulse/next-config/keys';
import { keys as observability } from '@pulse/observability/keys';
import { keys as payments } from '@pulse/payments/keys';
import { createEnv } from '@t3-oss/env-nextjs';

export const env = createEnv({
  extends: [
    auth(),
    analytics(),
    core(),
    database(),
    email(),
    observability(),
    payments(),
  ],
  server: {},
  client: {},
  runtimeEnv: {},
});
