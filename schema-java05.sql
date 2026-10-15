-- RideShare Java 5
-- Profilet dhe rolet e perdoruesve

CREATE TABLE IF NOT EXISTS profilet (
    github_id TEXT PRIMARY KEY,
    emri TEXT NOT NULL,
    roli TEXT NOT NULL DEFAULT 'udhetar'
        CHECK (roli IN ('udhetar', 'shofer')),
    krijuar_me TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Lidhja e udhetimit me shoferin qe e ka ne pronesi
ALTER TABLE udhetimet
ADD COLUMN IF NOT EXISTS shofer_id TEXT;