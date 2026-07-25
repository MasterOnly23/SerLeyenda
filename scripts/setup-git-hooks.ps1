$ErrorActionPreference = "Stop"

$repositoryRoot = Resolve-Path (Join-Path $PSScriptRoot "..")

git -C $repositoryRoot config core.hooksPath .githooks

Write-Output "Git hooks configured from .githooks"
