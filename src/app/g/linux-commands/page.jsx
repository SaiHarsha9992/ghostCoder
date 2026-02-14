"use client";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function LinuxPage() {
  return (
    <>
      <Header className="w-full top-0" />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto py-16 px-16 text-white border border-white m-8 bg-[#2a3d41]">
        <h1 className="text-3xl font-bold mb-2">Linux Commands in DevOps - ghostCoder Edition</h1>
        <p className="text-sm text-gray-400 mb-6">DevOps engineers rely heavily on Linux for server management, CI/CD, automation, and deployment. Here's a categorized list of essential Linux commands tailored for DevOps workflows.</p>

        <section className="space-y-6 text-sm leading-relaxed">

          <div>
            <h2 className="text-xl font-semibold mb-2">1. System Information</h2>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>
{`uname -a : Show kernel and system information
hostname : Display or set system hostname
top / htop : Monitor real-time processes
uptime : How long the system has been running
whoami : Show current user`}
              </code>
            </pre>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">2. Disk & Memory Usage</h2>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>
{`df -h : Disk space usage
du -sh : Disk usage of a directory
free -m : Memory usage
lsblk : List block devices
mount / umount : Mount or unmount file systems`}
              </code>
            </pre>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">3. File Management</h2>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>
{`ls -al : List files with permissions
cp, mv, rm : Copy, move, remove files/directories
find /path -name filename : Find files
cat, less, tail -f : View contents/logs
touch, mkdir, rmdir : File/Directory operations`}
              </code>
            </pre>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">4. Networking</h2>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>
{`ip a or ifconfig : Show IP address and interfaces
ping : Check connectivity
netstat -tulpn / ss -tulpn : Ports in use
curl, wget : HTTP requests and file download
scp, rsync : Secure copy and sync`}
              </code>
            </pre>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">5. User & Permission Management</h2>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>
{`adduser, userdel, usermod : User management
chmod, chown : Change file permissions/ownership
groups, id : Display user group info`}
              </code>
            </pre>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">6. Process & Job Control</h2>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>
{`ps aux : List running processes
kill, killall, pkill : Terminate processes
jobs, bg, fg : Job control
nohup, & : Run in background`}
              </code>
            </pre>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">7. Package Management</h2>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>
{`apt, yum, dnf, zypper : Install/remove/update packages depending on distro
dpkg -l / rpm -qa : List installed packages`}
              </code>
            </pre>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">8. Services & Daemons</h2>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>
{`systemctl start|stop|status service : Manage services (SystemD)
service name start|stop|status : SysVinit style`}
              </code>
            </pre>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">9. SSH & Remote Management</h2>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>
{`ssh user@host : Connect to remote server
ssh-keygen : Generate SSH keys
ssh-copy-id user@host : Copy SSH key to remote`}
              </code>
            </pre>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">10. Logs & Monitoring</h2>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>
{`journalctl -xe : View system logs
tail -f /var/log/syslog or /var/log/messages
dmesg : Kernel ring buffer`}
              </code>
            </pre>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">11. Cron Jobs & Scheduling</h2>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>
{`crontab -e : Edit user cron jobs
crontab -l : List cron jobs
systemctl status cron or service cron status`}
              </code>
            </pre>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">12. Compression & Archiving</h2>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>
{`tar -czvf archive.tar.gz folder/ : Compress
tar -xzvf archive.tar.gz : Extract
zip, unzip, gzip, gunzip`}
              </code>
            </pre>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">13. Docker (Common Commands)</h2>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>
{`docker ps, docker images, docker exec, docker logs
docker build -t tag ., docker run -d -p port:image`}
              </code>
            </pre>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">14. Git (Version Control)</h2>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
              <code>
{`git clone, git status, git add, git commit, git push, git pull`}
              </code>
            </pre>
          </div>

          <div className="mt-8 border-t pt-4 text-sm text-gray-400">
            <p><strong>ghostCoder - Powering DevOps with Simplicity & Speed</strong></p>
          </div>

        </section>
      </main>

      <Footer className="w-full bottom-0" />
    </>
  );
}
