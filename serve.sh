#!/bin/bash
# 停止旧实例
PIDFILE="/Users/mi/github/pages_save/blueoak.10u.org_2026-04-29-02-27-34/_logs/nginx.pid"
[ -f "$PIDFILE" ] && nginx -s stop -c "/Users/mi/github/pages_save/blueoak.10u.org_2026-04-29-02-27-34/nginx.conf" 2>/dev/null; sleep 0.5
# 启动
nginx -c "/Users/mi/github/pages_save/blueoak.10u.org_2026-04-29-02-27-34/nginx.conf"
echo "已启动: http://localhost:8888/"
open "http://localhost:8888/zh-HK/"
