from rest_framework import serializers
from base.models import Address

class BranchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = '__all__'