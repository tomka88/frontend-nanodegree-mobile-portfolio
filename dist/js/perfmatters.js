function logCRP(){var o=window.performance.timing,n=o.domContentLoadedEventStart-o.domLoading,t=o.domComplete-o.domLoading,d=document.getElementById("crp-stats");d.textContent="DCL: "+n+"ms, onload: "+t+"ms"}window.addEventListener("load",function(o){logCRP()});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcmZtYXR0ZXJzLmpzIl0sIm5hbWVzIjpbImxvZ0NSUCIsInQiLCJ3aW5kb3ciLCJwZXJmb3JtYW5jZSIsInRpbWluZyIsImRjbCIsImRvbUNvbnRlbnRMb2FkZWRFdmVudFN0YXJ0IiwiZG9tTG9hZGluZyIsImNvbXBsZXRlIiwiZG9tQ29tcGxldGUiLCJzdGF0cyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0ZXh0Q29udGVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCJdLCJtYXBwaW5ncyI6IkFBc0JBLFFBQVNBLFVBQ1AsR0FBSUMsR0FBSUMsT0FBT0MsWUFBWUMsT0FDekJDLEVBQU1KLEVBQUVLLDJCQUE2QkwsRUFBRU0sV0FDdkNDLEVBQVdQLEVBQUVRLFlBQWNSLEVBQUVNLFdBQzNCRyxFQUFRQyxTQUFTQyxlQUFlLFlBQ3BDRixHQUFNRyxZQUFjLFFBQVVSLEVBQU0sZUFBaUJHLEVBQVcsS0FHbEVOLE9BQU9ZLGlCQUFpQixPQUFRLFNBQVNDLEdBQ3ZDZiIsImZpbGUiOiJwZXJmbWF0dGVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE1lYXN1cmluZyB0aGUgQ3JpdGljYWwgUmVuZGVyaW5nIFBhdGggd2l0aCBOYXZpZ2F0aW9uIFRpbWluZ1xuLy8gaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL2Z1bmRhbWVudGFscy9wZXJmb3JtYW5jZS9jcml0aWNhbC1yZW5kZXJpbmctcGF0aC9tZWFzdXJlLWNycFxuXG4vLyB2YXIgZm9udCA9IG5ldyBGb250RmFjZShcIk9wZW4gU2Fuc1wiLCBcInVybCgvZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6NDAwKVwiLCB7XG4vLyAgIHN0eWxlOiAnbm9ybWFsJywgdW5pY29kZVJhbmdlOiAnVSswMDAtNUZGJywgd2VpZ2h0OiAnNDAwJ1xuLy8gfSk7XG5cbi8vIC8vIGRvbid0IHdhaXQgZm9yIHRoZSByZW5kZXIgdHJlZSwgaW5pdGlhdGUgYW4gaW1tZWRpYXRlIGZldGNoIVxuLy8gZm9udC5sb2FkKCkudGhlbihmdW5jdGlvbigpIHtcbi8vICAgLy8gYXBwbHkgdGhlIGZvbnQgKHdoaWNoIG1heSByZS1yZW5kZXIgdGV4dCBhbmQgY2F1c2UgYSBwYWdlIHJlZmxvdylcbi8vICAgLy8gYWZ0ZXIgdGhlIGZvbnQgaGFzIGZpbmlzaGVkIGRvd25sb2FkaW5nXG4vLyAgIGRvY3VtZW50LmZvbnRzLmFkZChmb250KTtcbi8vICAgZG9jdW1lbnQuYm9keS5zdHlsZS5mb250RmFtaWx5ID0gXCJPcGVuIFNhbnMsIHNhbnMtc2VyaWZcIjtcblxuLy8gICAvLyBPUi4uLiBieSBkZWZhdWx0IHRoZSBjb250ZW50IGlzIGhpZGRlbiwgXG4vLyAgIC8vIGFuZCBpdCdzIHJlbmRlcmVkIGFmdGVyIHRoZSBmb250IGlzIGF2YWlsYWJsZVxuLy8gICAvLyB2YXIgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbi8vICAgLy8gY29udGVudC5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG5cbi8vICAgLy8gT1IuLi4gYXBwbHkgeW91ciBvd24gcmVuZGVyIHN0cmF0ZWd5IGhlcmUuLi4gXG4vLyB9KTtcblxuZnVuY3Rpb24gbG9nQ1JQKCkge1xuICB2YXIgdCA9IHdpbmRvdy5wZXJmb3JtYW5jZS50aW1pbmcsXG4gICAgZGNsID0gdC5kb21Db250ZW50TG9hZGVkRXZlbnRTdGFydCAtIHQuZG9tTG9hZGluZyxcbiAgICBjb21wbGV0ZSA9IHQuZG9tQ29tcGxldGUgLSB0LmRvbUxvYWRpbmc7XG4gIHZhciBzdGF0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JwLXN0YXRzXCIpO1xuICBzdGF0cy50ZXh0Q29udGVudCA9ICdEQ0w6ICcgKyBkY2wgKyAnbXMsIG9ubG9hZDogJyArIGNvbXBsZXRlICsgJ21zJztcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gIGxvZ0NSUCgpO1xufSk7XG4iXX0=
